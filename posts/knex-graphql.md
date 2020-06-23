---
title: "Knex - Graphql Back End"
image: "https://i.imgur.com/yiDtHBp.png"
description: "Firebase is an incredible platform to connect any iOS, android and/or web app too.  By connecting your project to Google's Firebase you will have access to their cloud storage, cloud firestore and real-time database, authentication, analytics and much more."
date: 1587340800
---

## How To Create A Knex / Graphql Back End 🖥

![Banner](https://i.imgur.com/yiDtHBp.png)

### Step 1

Create a project directory. `mkdir knex-graphql`.

Then run `yarn init`. When it asks your for the main file, add `src/index.js`.

Now that have that ready we can star adding the dependencies we're going to need.

> Graphql has a rich ecosystem with many amazing options. Feel free to experiment with the plethora of amazing graphql tools out there!

`yarn add -D nodemon dotenv`

`yarn add express apollo-server-express graphql knex pg`

There's a few things we don't want to push up to our GitHub repo. `touch .gitignore` in the root of your repo and add:

```bash
node_modules/
.env
yarn-error.log
```

Now that we have all our tools added, let's set up out database!

### Step 2

Let's create a sql file and set up some scripts in our package.json.

`touch remakeDatabase.sql`

```sql
DROP DATABASE IF EXISTS my_db;

CREATE DATABASE my_db;
```

Open package.json and these scripts:

```json
{
  "scripts": {
    "start": "node src/index.js",
    "server": "nodemon src/index.js",
    "db-remake": "psql -f remakeDatabase.sql"
  }
}
```

Now we can use the command `yarn db-remake` anytime we want to rollback our database.

### Step 3

It's time to get knex set up! In root directory, run: `knex init`. We don't need everything in here, so we're just going to delete staging and testing environments and set knex up to work with postgres.

```javascript
// knexfile.js
require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./src/data/migrations",
    },
    seeds: {
      directory: "./src/data/seeds",
    },
  },
};
```

We set our migration and build folders, let's make our data folder with the command `mkdir src/data`. Now that we have that in place, let's set up our migrations and seeds. 🌱

Run: `knex migrate:make users_table && knex seed:make 01_users`.

```javascript
// migration file
exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments();
    tbl.text("username").notNullable();
    tbl.text("email").notNullable();
    tbl.boolean("admin").default(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
```

```javascript
// seed file
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "rowValue1", email: "email1@email.com" },
        { id: 2, username: "rowValue2", email: "email2@email.com" },
        { id: 3, username: "rowValue3", email: "email3@email.com" },
      ]);
    });
};
```

We have our migrations and seeds set up now, let's run them and make sure everything is great. We can make our life a little easier by adding 2 more scripts to our package.json.

```json
{
  "scripts": {
    "start": "node src/index.js",
    "server": "nodemon src/index.js",
    "db-remake": "psql -f remakeDatabase.sql",
    "knex-refresh": "knex migrate:rollback && knex migrate:latest && knex seed:run",
    "total-reset": "yarn db-remake && yarn knex-refresh"
  }
}
```

You probably we added `knex-refresh` and `total-reset`. Knex refresh command refreshes our migrations and runs our seeds in one command. If we make any changes to schema that breaks our postgres tables, we can just roll the whole thing back, database and all before we run our new migrations as seeds.

One **final** thing. We need to `touch src/data/knexConfig.js` and add the following code to it:

```javascript
const knex = require("knex");
const knexConfig = require("../../knexfile");

module.exports = knex(knexConfig.development);
```

### Step 4

In our package.json we have our main file set as `src/index.js`. Let's set that up. Run: `mkdir src && touch src/index.js`.

Before we set up our index.js, let's add a couple env variables we will need.

Create a .env file in the root of your project and add:

```bash
PORT = 4000
DATABASE_URL = postgres://postgres:password@localhost:5432/my_db
```

Now that that we have those variables in place, let's write some code! 🔥

```javascript
// src/index.js
const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");

const db = require("./data/config");
const app = express();

require("dotenv").config();

const port = process.env.PORT;

// typeDefs is where we define what our schema looks like
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    admin: Boolean!
  }
  type Query {
    users: [User]!
    user(id: ID!): User!
  }
`;

// resolvers are where we put the logic to make our typeDefs come to life
const resolvers = {
  Query: {
    users(parent, args, ctx) {
      return db("users");
    },
    user(_, { id }) {
      return db("users").where({ id }).first();
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen(port, () =>
  console.log(`🖥 Server ready on http://localhost:${port}/grahql 🚀`)
);
```

And that's it! We have a fully functional graphql server up in minutes! 🔥 Woo hoo!
