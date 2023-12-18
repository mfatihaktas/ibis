"""Flink ibis expression to SQL string compiler."""

from __future__ import annotations

import functools
from io import StringIO

import ibis.common.exceptions as com
import ibis.expr.operations as ops
import ibis.expr.types as ir
from ibis import util
from ibis.backends.base.sql.compiler import (
    Compiler,
    Select,
    SelectBuilder,
    TableSetFormatter,
)
from ibis.backends.base.sql.registry import quote_identifier
from ibis.backends.flink.translator import FlinkExprTranslator


class FlinkTableSetFormatter(TableSetFormatter):
    _join_names = {
        **TableSetFormatter._join_names,
        ops.AsOfJoin: "JOIN",
    }

    def __init__(self, parent, node, indent=2):
        super().__init__(parent, node, indent)

        self.join_table_aliases = []

    def _quote_identifier(self, name):
        return quote_identifier(name, force=True)

    def _format_in_memory_table(self, op):
        names = op.schema.names
        raw_rows = []
        for row in op.data.to_frame().itertuples(index=False):
            raw_row = []
            for val, name in zip(row, names):
                lit = ops.Literal(val, dtype=op.schema[name])
                raw_row.append(self._translate(lit))
            raw_rows.append(", ".join(raw_row))
        rows = ", ".join(f"({raw_row})" for raw_row in raw_rows)
        return f"(VALUES {rows})"

    def _format_window_tvf(self, op) -> str:
        if isinstance(op, ops.TumbleWindowingTVF):
            function_type = "TUMBLE"
        elif isinstance(op, ops.HopWindowingTVF):
            function_type = "HOP"
        elif isinstance(op, ops.CumulateWindowingTVF):
            function_type = "CUMULATE"
        return f"TABLE({function_type}({format_windowing_tvf_params(op, self)}))"

    def _format_table(self, op, include_alias: bool = True) -> str:
        ctx = self.context
        if isinstance(op, ops.WindowingTVF):
            formatted_table = self._format_window_tvf(op)
            return f"{formatted_table} {ctx.get_ref(op)}"
        else:
            result = super()._format_table(op=op, include_alias=include_alias)

        ref_op = op
        if isinstance(op, ops.SelfReference):
            ref_op = op.table

        if isinstance(ref_op, ops.InMemoryTable):
            names = op.schema.names
            result += f"({', '.join(self._quote_identifier(name) for name in names)})"

        return result

    def _walk_asof_join_tree(self, op):
        if util.all_of([op.left, op.right], ops.Join):
            raise NotImplementedError("Do not support joins between joins yet")

        jname = self._get_join_type(op)

        # Read off tables and join predicates left-to-right in
        # depth-first order
        if isinstance(op.left, ops.Join):
            self._walk_asof_join_tree(op.left)
            self.record_join_tables(op.right)

        elif isinstance(op.right, ops.Join):
            self.record_join_tables(op.left)
            self._walk_asof_join_tree(op.right)

        else:
            # Both tables
            self.record_join_tables(op.left)
            self.record_join_tables(op.right)

        self.join_types.append(jname)
        self.join_predicates.append(op.predicates)

    def record_join_tables(self, op: ops.Relation):
        formatted_table = self._format_table(op=op)
        if not isinstance(formatted_table, str):
            # TODO (mehmet): Is it normal/desired that _format_table()
            # returns different types?
            table_name = formatted_table
            alias = formatted_table

        else:
            split_result = formatted_table.split()
            if len(split_result) == 1:
                table_name = split_result[0]
                alias = table_name
            elif len(split_result) == 2:
                table_name = split_result[0]
                alias = split_result[1]
            else:
                raise ValueError("Unexpected string returned by `_format_table()`.")

        self.join_tables.append(table_name)
        self.join_table_aliases.append(alias)

    def get_result(self):
        # Got to unravel the join stack; the nesting order could be
        # arbitrary, so we do a depth first search and push the join tokens
        # and predicates onto a flat list, then format them
        op = self.node

        if not isinstance(op, ops.AsOfJoin):
            return super().get_result()

        self._walk_asof_join_tree(op)

        # TODO: Now actually format the things
        buf = StringIO()
        buf.write(f"{self.join_tables[0]} AS {self.join_table_aliases[0]}")
        for jtype, table, alias, preds in zip(
            self.join_types,
            self.join_tables[1:],
            self.join_table_aliases[1:],
            self.join_predicates,
        ):
            buf.write("\n")
            buf.write(util.indent(f"{jtype} {table}", self.indent))

            fmt_preds = []
            npreds = len(preds)

            if jtype == "JOIN":
                # extract the closest match condition
                pred = [pred for pred in preds if not isinstance(pred, ops.Equals)]
                if len(pred) < 1:
                    raise com.UnsupportedArgumentError(
                        "ASOF JOIN requires exactly one closest match condition in the predicate,"
                        " none is provided"
                    )
                if len(pred) > 1:
                    raise com.UnsupportedOperationError(
                        f"ASOF JOIN requires exactly one closest match condition in the predicate, "
                        f"{len(pred)} are provided ({pred})"
                    )
                closest_match = next(iter(pred))

                # extract the column from the condition
                if isinstance(closest_match, (ops.GreaterEqual, ops.Greater)):
                    asof = closest_match.left
                elif isinstance(closest_match, (ops.LessEqual, ops.Less)):
                    asof = closest_match.right
                else:
                    raise com.UnsupportedArgumentError(
                        "ASOF JOIN only supports >, >=, <, <= for the closest match condition"
                    )
                if (
                    self._format_table(op=asof.table, include_alias=False)
                    != self.join_tables[0]
                ):
                    raise com.UnsupportedArgumentError(
                        "ASOF JOIN condition must be defined on the left table"
                    )

                buf.write(f" FOR SYSTEM_TIME AS OF {self._translate(asof)} AS {alias}")

                for pred in [pred for pred in preds if isinstance(pred, ops.Equals)]:
                    new_pred = self._translate(pred)

                    if npreds > 1:
                        new_pred = f"({new_pred})"
                    fmt_preds.append(new_pred)

                if len(fmt_preds):
                    buf.write("\n")

                    conj = " AND\n{}".format(" " * 3)
                    fmt_preds = util.indent(
                        "ON " + conj.join(fmt_preds), self.indent * 2
                    )
                    buf.write(fmt_preds)
            else:
                for pred in preds:
                    new_pred = self._translate(pred)
                    if npreds > 1:
                        new_pred = f"({new_pred})"
                    fmt_preds.append(new_pred)

                if len(fmt_preds):
                    buf.write("\n")

                    conj = " AND\n{}".format(" " * 3)
                    fmt_preds = util.indent(
                        "ON " + conj.join(fmt_preds), self.indent * 2
                    )
                    buf.write(fmt_preds)

        return buf.getvalue()


class FlinkSelectBuilder(SelectBuilder):
    def _convert_group_by(self, exprs):
        return exprs


class FlinkSelect(Select):
    def format_group_by(self) -> str:
        if not len(self.group_by):
            # There is no aggregation, nothing to see here
            return None

        lines = []
        if len(self.group_by) > 0:
            group_keys = map(self._translate, self.group_by)
            clause = "GROUP BY {}".format(", ".join(list(group_keys)))
            lines.append(clause)

        if len(self.having) > 0:
            trans_exprs = []
            for expr in self.having:
                translated = self._translate(expr)
                trans_exprs.append(translated)
            lines.append("HAVING {}".format(" AND ".join(trans_exprs)))

        return "\n".join(lines)


class FlinkCompiler(Compiler):
    translator_class = FlinkExprTranslator
    table_set_formatter_class = FlinkTableSetFormatter
    select_builder_class = FlinkSelectBuilder
    select_class = FlinkSelect

    cheap_in_memory_tables = True

    @classmethod
    def to_sql(cls, node, context=None, params=None):
        if isinstance(node, ir.Expr):
            node = node.op()

        if isinstance(node, ops.Literal):
            from ibis.backends.flink.utils import translate_literal

            return translate_literal(node)

        return super().to_sql(node, context, params)


@functools.singledispatch
def format_windowing_tvf_params(
    op: ops.WindowingTVF, formatter: TableSetFormatter
) -> str:
    raise com.OperationNotDefinedError(f"No formatting rule for {type(op)}")


@format_windowing_tvf_params.register(ops.TumbleWindowingTVF)
def _tumble_window_params(
    op: ops.TumbleWindowingTVF, formatter: TableSetFormatter
) -> str:
    return ", ".join(
        filter(
            None,
            [
                f"TABLE {formatter._quote_identifier(op.table.name)}",
                f"DESCRIPTOR({formatter._translate(op.time_col)})",
                formatter._translate(op.window_size),
                formatter._translate(op.offset) if op.offset else None,
            ],
        )
    )


@format_windowing_tvf_params.register(ops.HopWindowingTVF)
def _hop_window_params(op: ops.HopWindowingTVF, formatter: TableSetFormatter) -> str:
    return ", ".join(
        filter(
            None,
            [
                f"TABLE {formatter._quote_identifier(op.table.name)}",
                f"DESCRIPTOR({formatter._translate(op.time_col)})",
                formatter._translate(op.window_slide),
                formatter._translate(op.window_size),
                formatter._translate(op.offset) if op.offset else None,
            ],
        )
    )


@format_windowing_tvf_params.register(ops.CumulateWindowingTVF)
def _cumulate_window_params(
    op: ops.CumulateWindowingTVF, formatter: TableSetFormatter
) -> str:
    return ", ".join(
        filter(
            None,
            [
                f"TABLE {formatter._quote_identifier(op.table.name)}",
                f"DESCRIPTOR({formatter._translate(op.time_col)})",
                formatter._translate(op.window_step),
                formatter._translate(op.window_size),
                formatter._translate(op.offset) if op.offset else None,
            ],
        )
    )
