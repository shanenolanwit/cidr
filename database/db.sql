-- to create a new database
CREATE DATABASE cidr;

-- to use database
use cidr;

-- creating a new table
CREATE TABLE cidr (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  percentage VARCHAR(100) NOT NULL
);

-- to show all tables
show tables;

-- to describe table
describe cidr;


