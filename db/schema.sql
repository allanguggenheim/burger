CREATE DATABASE burgers_db;

DROP TABLE `burgers_db`.`burgers`;

CREATE TABLE `burgers_db`.`burgers` (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(99) NULL,
    devoured BIT NULL,
    date TIMESTAMP NULL,
    PRIMARY KEY (id)
);

