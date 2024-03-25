SELECT
  `t2`.`num`,
  `t2`.`id`,
  `t2`.`window_start`,
  `t2`.`window_end`
FROM (
  SELECT
    `t0`.*
  FROM TABLE(TUMBLE(TABLE `left`, DESCRIPTOR(`row_time`), INTERVAL '5' MINUTE(2))) AS `t0`
) AS `t2`
WHERE
  NOT CAST(EXISTS(
    SELECT
      1
    FROM (
      SELECT
        `t1`.*
      FROM TABLE(TUMBLE(TABLE `right`, DESCRIPTOR(`row_time`), INTERVAL '5' MINUTE(2))) AS `t1`
    ) AS `t3`
    WHERE
      `t2`.`num` = `t3`.`num`
  ) AS BOOLEAN)