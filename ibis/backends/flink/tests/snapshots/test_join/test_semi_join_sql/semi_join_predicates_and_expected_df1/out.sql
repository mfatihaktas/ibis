SELECT
  `t5`.`num`,
  `t5`.`id`,
  `t5`.`window_start`,
  `t5`.`window_end`
FROM (
  SELECT
    *
  FROM (
    SELECT
      `t0`.*
    FROM TABLE(TUMBLE(TABLE `left`, DESCRIPTOR(`row_time`), INTERVAL '5' MINUTE(2))) AS `t0`
  ) AS `t2`
  WHERE
    EXISTS(
      SELECT
        1
      FROM (
        SELECT
          `t1`.*
        FROM TABLE(TUMBLE(TABLE `right`, DESCRIPTOR(`row_time`), INTERVAL '5' MINUTE(2))) AS `t1`
      ) AS `t3`
      WHERE
        `t2`.`num` = `t3`.`num`
        AND `t2`.`window_start` = `t3`.`window_start`
        AND `t2`.`window_end` = `t3`.`window_end`
    )
) AS `t5`