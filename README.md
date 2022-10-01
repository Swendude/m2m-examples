# Many-to-Many relationships using Sequelize

This document provides examples on how to work with many-to-many (m2m) relationships with sequelize.

## Example tables

All examples work on the following domain:

There are _users_ and _events_, we represent them using the following tables

#### User Table

| Column | type    |
| ------ | ------- |
| id     | integer |
| name   | string  |

#### Event Table

| Column    | type                            |
| --------- | ------------------------------- |
| id        | integer                         |
| name      | string                          |
| organizer | integer (foreignKey: 'User.id') |
