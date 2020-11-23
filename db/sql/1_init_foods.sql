create table IF not exists `foods`
(
    `id`        VARCHAR(200) NOT NULL,
    `name`      VARCHAR(30) NOT NULL,
    `price`     INT(10) NOT NULL,
    `calorie`   INT(10) NOT NULL,
    PRIMARY KEY(`id`)
)