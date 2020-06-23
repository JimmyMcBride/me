---
title: "Customize CRA"
image: "https://i.imgur.com/breWxmx.png"
description: "Are you tired of deleting the same things and adding the same extra packages to create-react-app just to get up and running? Well, friend, you're in luck! Let's learn how to make our own version of CRA!"
date: 1576368000
---

## Create Your Own React Template 🎨

![Banner](https://i.imgur.com/breWxmx.png)

Are you tired of deleting the same things and adding the same extra packages to create-react-app just to get up and running? Don't you just wish you could type a command... like say `yarn create react-app <app-name> --template <template-name>` and -- POOF! -- it spits out a version of CRA that has only what you need and everything you want so you can just start coding right away! Well, friend, you're in luck!

After using create-react-app for quite a while, I got tired of having to delete files and code, and then I would have to go in and install react-router, redux, and a few other things just to get off of the ground. It became something that started to slowly chip away at my soul having to go through the same lengthy setup process each time (I don't know how react dev's survived before CRA).

So here we are, going over the steps you need to create your own react-app template and publish it to npm! Let's get started.

## Step 1

Go to Facebook's [create-react-app repo](https://github.com/facebook/create-react-app), fork it then, clone the CRA repo to your machine.

## Step 2

Once you are inside the create-react-app directory on your machine, `cd packages/`.
Now that you are in the packages directory, you are going to want to create the folder for your template file. To make a template it would be wise to follow the naming convention `cra-template-<template-name>` when you make this new directory. Example: `mkdir cra-template-bushido` (Named mine after the old samurai `code` of honor.)

## Step 3

Now that you have your appropriately named template directory inside the packages directory, we can start setting up our template. Inside your cra-template directory, `touch template.json`. This template.json is where you want to add any additional packages and scripts and stuff. Don't worry about adding things CRA already does for you. My template.json ended up looking something like this:

```json
{
  "devDependencies": {
    "@testing-library/react": "^9.3.2",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/user-event": "^7.1.2"
  },
  "dependencies": {
    "axios": "^0.19.0",
    "normalize.css": "^8.0.1",
    "react-redux": "^7.1.1",
    "react-router": "^5.1.2",
    "react-router-dom": "^5.1.2",
    "redux": "^4.0.4",
    "redux-logger": "^3.0.6",
    "redux-thunk": "^2.3.0",
    "serve": "^11.2.0",
    "styled-components": "^4.4.0"
  },
  "scripts": {
    "serve": "serve -s build",
    "build-and-serve": "npm run build && npm run serve"
  }
}
```

Now we can create a README.md, give a good description of what our amazing new template hopes to accomplish and move on to the next step.

## Step 4

Let's make `template` directory now. So far, our file structure should look a little something like this:

```bash
create-react-app/
  .github/
  docusaurus/
  packages/
    ...
    cra-template-<template-name>/
      template/
      README.md
      template.json
  ...
```

The files and directories inside of this template folder is what CRA is going to spit out when we call our template. So inside `template/` we want to have a `public/` and a `src/` folder with a `gitignore` file (CRA will add the '.' to the gitignore file when you run the command so no worries) and a README.md that describes the code and what this template has to offer to anybody who decides to use our template. To get the public folder, I recommend running the command `cp -R ../cra-template/template/public ./template` to copy the public folder from the default template directory and into the new template folder.

You're going to need an App.js, index.js, maybe a index.css or maybe a components folder. This is where you really get to be yourself, so set up the perfect boilerplate for you inside the src folder.

## Step 5

We are almost done! Now that we have our template folder with a public and src folder, a gitignore, a README.md and a template.json, it is time time to do an `npm init`. Make sure your main points at template.json and not index.js. Here is what my package.json looks like:

```json
{
  "name": "cra-template-bushido",
  "version": "1.0.1",
  "description": "CRA plus redux, router, axios, normalize.css, styled components",
  "main": "template.json",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/JimmyMcBride/create-react-app.git"
  },
  "keywords": ["redux", "router", "axios", "styled-components"],
  "author": "Jimmy McBride",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/JimmyMcBride/create-react-app/issues"
  },
  "homepage": "https://github.com/JimmyMcBride/create-react-app#readme"
}
```

## Step 6

Before we run `npm login`, we must make sure we have an npm account and our email is verified before this will work. Once you have your account set up and email verified, run `npm login` once you are logged in then just run `npm publish` and BOOM! Just like that, your template should be live, you can run create-react-app with the `--template <template-name>` tag on the end and you're good to go! Since I named my template cra-template-bushido, I run the command `yarn create react-app <app-name> --template bushido`, and it spins up my own custom react app boilerplate.

I hope you found this as helpful as I have. Let me know what your thoughts and feedback are in the comments below! Thanks, guys! If you want to check out my cra-template code as a reference and/or to see how I did it, [click here](https://github.com/JimmyMcBride/create-react-app/tree/master/packages/cra-template-bushido).
