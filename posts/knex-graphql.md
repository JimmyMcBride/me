---
title: "Knex - Graphql Back End"
image: "https://i.imgur.com/yiDtHBp.png"
description: "Firebase is an incredible platform to connect any iOS, android and/or web app too.  By connecting your project to Google's Firebase you will have access to their cloud storage, cloud firestore and real-time database, authentication, analytics and much more."
---

## How To Create A Knex / Graphql Back End

![Banner](https://i.imgur.com/yiDtHBp.png)

### Step 1

Create a project directory. `mkdir knex-graphql`.

Then run `yarn init`. When it asks your for the main file, add `src/index.js`.

Now that have that ready we can star adding the dependencies we're going to need.

> Graphql has a rich ecosystem with many amazing options. Feel free to experiment with the plethora of amazing graphql tools out there!

`yarn add -D nodemon dotenv`

`yarn add express apollo-server-express graphql knex pg`

There's a few things we don't want to push up to our GitHub repo. `touch .gitignore` in the root of your repo and add:

![.gitignore](https://i.imgur.com/pNxGKjO.png)

Now that we have all our tools added, let's set up out database!

### Step 2

Let's create a sql file and set up some scripts in our package.json.

`touch remakeDatabase.sql`

![remake database sql script](https://i.imgur.com/JcqgdJG.png)

Open package.json and these scripts:

![package.json scripts](https://i.imgur.com/KRGfZbZ.png)

Now we can use the command `yarn db-remake` anytime we want to rollback our database.

### Step 3

It's time to get knex set up! In root directory, run: `knex init`. We don't need everything in here, so we're just going to delete staging and testing environments and set knex up to work with postgres.

![knex file](https://i.imgur.com/EMlwt0i.png)

We set our migration and build folders, let's make our data folder with the command `mkdir src/data`. Now that we have that in place, let's set up our migrations and seeds. 🌱

Run: `knex migrate:make users_table && knex seed:make 01_users`.

![migration file](https://i.imgur.com/TovUBuS.png)

![seed file](https://i.imgur.com/go3wPaX.png)

We have our migrations and seeds set up now, let's run them and make sure everything is great. We can make our life a little easier by adding 2 more scripts to our package.json.

![more scripts](https://i.imgur.com/STLaujx.png)

You probably we added `knex-refresh` and `total-reset`. Knex refresh command refreshes our migrations and runs our seeds in one command. If we make any changes to schema that breaks our postgres tables, we can just roll the whole thing back, database and all before we run our new migrations as seeds.

One **final** thing. We need to `touch src/data/knexConfig.js` and add the following code to it:

![knex config file](https://i.imgur.com/p3Hp5oL.png)

### Step 4

In our package.json we have our main file set as `src/index.js`. Let's set that up. Run: `mkdir src && touch src/index.js`.

Before we set up our index.js, let's add a couple env variables we will need.

Create a .env file in the root of your project and add:

![.env file](https://i.imgur.com/WjFj9X6.png)

Now that that we have those variables in place, let's write some code! 🔥

![writing our index.js](https://i.imgur.com/FNIWqNf.png)

And that's it! We have a fully functional graphql server up in minutes! 🔥 Woo hoo!
