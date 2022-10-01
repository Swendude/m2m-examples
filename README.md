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

_Events_ and _users_ have a simple one-to-many relationship. Events have on organizer and users can organize multiple events.

## Example 0: Setup

Let's start with setting up our tables and relationships using `sequelize-cli`.

```bash
❯ npx sequelize-cli init
❯ npm i pg
```

Next we edit `config/config.json` and `models/index.js` to connect to our elephantDB database. We verify the connection by running a empty migration.

```bash
Sequelize CLI [Node: 16.14.2, CLI: 6.5.1, ORM: 6.23.2]

Loaded configuration file "config/config.json".
Using environment "development".
No migrations were executed, database schema was already up to date.
```

Next, we create our two models.

```bash
❯ npx sequelize-cli model:generate --name User --attributes name:string
❯ npx sequelize-cli model:generate --name Event --attributes name:string
```

We add a new relationship to our models to represent the `organizer` field. And generate an appropriate migration for it. We also set a defaultValue for the timestamp fields that sequelize generates.

After running the migrations, we add some seeders to populate our database and seed the tables.

We now define our first queries in `index.js` to see if everything works. Logging the first user and event (and adding an include to both) shows:

```javascript
// ❯ node index.js
{
  id: 1,
  name: 'Rincewind',
  createdAt: 2022-10-01T14:54:05.012Z,
  updatedAt: 2022-10-01T14:54:05.012Z,
  organizing: {
    id: 1,
    name: 'Festival in Ankh-Morpork',
    createdAt: 2022-10-01T14:54:05.322Z,
    updatedAt: 2022-10-01T14:54:05.322Z,
    organizerId: 1
  }
}
{
  id: 1,
  name: 'Festival in Ankh-Morpork',
  createdAt: 2022-10-01T14:54:05.322Z,
  updatedAt: 2022-10-01T14:54:05.322Z,
  organizerId: 1,
  organizer: {
    id: 1,
    name: 'Rincewind',
    createdAt: 2022-10-01T14:54:05.012Z,
    updatedAt: 2022-10-01T14:54:05.012Z
  }
}
```

**⚠️ Note: we used the `as` keyword in the model definitions, this allows for easier includes and nicer output**
