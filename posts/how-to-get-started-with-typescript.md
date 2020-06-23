---
title: "Getting Started With TypeScript"
image: "https://res.cloudinary.com/practicaldev/image/fetch/s--21wLukIy--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s---VlDs1XR--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://dev-to-uploads.s3.amazonaws.com/i/dgarrrkw8uv3pcip7833.jpeg"
description: "TypeScript has a huge ecosystem and you can do pretty much anything with it. Create back end APIs, use it in your Vue or React projects and so much more. Learn the basics to start working with TypeScript today!"
date: 1590105600
---

## Getting Started With TypeScript

![Banner](https://res.cloudinary.com/practicaldev/image/fetch/s--21wLukIy--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s---VlDs1XR--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://dev-to-uploads.s3.amazonaws.com/i/dgarrrkw8uv3pcip7833.jpeg)

### Overview

Today we're going to be going over the basics of TypeScript. TypeScript has a huge ecosystem and you can do pretty much anything with it. Create back end APIs, use it in your Vue or React projects and so much more. Angular developers even go as far as to use TypeScript to farm carrots!

Today, we're just going to cover the basics.

- What is TypeScript?
- Why should I use TypeScript?
- How do I use TypeScript?
- What's the syntax?

> Sorry if you were hoping to learn about carrot farming... 🥕👨‍🌾

### What It Is

To quote Wikipedia:

> TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript. - [Wikipedia](https://en.wikipedia.org/wiki/TypeScript)

Couldn't have said it better myself.

### Why You Should Use It

By declaring your types, you're going to catch a LOT of bugs before you even get the chance to run your code. Let's look at an example.

```javascript
function multiply(a, b) {
  return a * b;
}

multiply("bill", 2); // NaN
```

If your working on some state logic in say, your react app and incorrect data types get passed to your code, this can cause some hard to find issues.

Not to worry, since we declare our data types in TypeScript, if we accidentally pass a string into our multiply function then we'll get an error right away letting us know that `"bill"` is an incorrect data type of 'string' and should be a 'number'.

You also have some awesome IntelliSense available to you in the TypeScript world as a result of type declarations.

Say we have a JavaScript object that looks like this:

```javascript
const john = {
  name: "John Doe",
  age: 30,
  height: "5 feet 11 inches",
};
```

When we want to call john's name, once we type `john.` we will see a list of keys available to use and can just tab complete the name key. Also, if you try and select a key that doesn't exist, for example: `john.location`, you will get a red error right away saying that location does not exist on the 'john' object. Even further, if you did something like; `john.nmae`, you would get back a message that said something like, `nmae does not exist on the object john. Did you mean 'john.name'?`. Well, yes. Yes, I did mean `john.name`. Thanks, TypeScript!

### How To Use TypeScript

You have three options; Node.js, Deno, or both!

Deno is super cool. I'm not going to go into it too deep here, but it comes with native support for TypeScript and uses Rust to compile your TypeScript code into JavaScript. 😲 [You can install it and read more about Deno here!](https://deno.land/)

With Node, you can run `npm i -g typescript ts-node` to add it globally to your computer. Then you can create TypeScript files and run them as you would with node, but with ts-node instead. Example: `ts-node index.ts` will run your TypeScript file, similar to how `node index.js` would work. Libraries and frameworks like Vue and React often come with TypeScript templates you can use to bootstrap a project with TypeScript.

### The Syntax

Declaring types on your arguments:

```typescript
function multiply(a: number, b: number) {
  return a * b;
}
function divide(a: number, b: number) {
  return a / b;
}
function add(a: number, b: number) {
  return a + b;
}
function subtract(a: number, b: number) {
  return a - b;
}

function math(num1: number, num2: number, op: string) {
  switch (op) {
    case "multiply":
      /* we don't declare types for parameters since the
      types have already been declared when the functions
      were created */
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    default:
      throw new Error(`That is not a valid operation. 💀
      \nTry: "multiply", "divide", "add", or "subtract". 👌`);
  }
}

math(2, 2, "add"); // 2
```

What about objects though? Say we refactored our math function to take in an object instead:

```typescript
interface MathArgs {
  num1: number;
  num2: number;
  op: string;
}

function math({ num1, num2, op }: MathArgs) {
  switch (op) {
    case "multiply":
      /* we don't declare types for parameters since the
      types have already been declared when the functions
      were created */
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    default:
      throw new Error(`That is not a valid operation. 💀
      \nTry: "multiply", "divide", "add", or "subtract". 👌`);
  }
}

math(2, 2, "add"); // 2
```

We can't call our args here `object` like we would for number, boolean, and string types. If we tried `math({ num1, num2, op }: object)` TypeScript would return an error saying the following: `Property 'num2' does not exist on type '{}'.`. This makes sense because `{} !== { num1, num2, op }`. So when declaring objects, remember to use "interface" to declare the key's and their data types to belong to that object.

Now, let's take a look at classes:

```typescript
class Person {
  // We want to declare the types for our constructor here
  public name: string;
  public age: number;
  private status: boolean;
  constructor(myName: string, myAge: number, myStatus: boolean) {
    this.name = myName;
    this.age = myAge;
    this.status = myStatus;
  }
  public getStatus = () => this.status;
}

/*
  We're using the class 'Person' do declare the type
  of our 'joe' constant.
*/
const joe: Person = new Person("Joe Smith", 32, true);

console.log(joe.getStatus()); // ✔️
console.log(joe.status); /* ❌ Property 'status' is private and only
                               accessible within class 'Person'. */
```

Side note: If you don't specify public, it's implied and you can use `#` at the beginning of a variable to declare it as private:

```typescript
class Person {
  // We want to declare the types for our constructor here
  name: string;
  age: number;
  #status: boolean;
  constructor(myName: string, myAge: number, myStatus: boolean) {
    this.name = myName;
    this.age = myAge;
    this.#status = myStatus;
  }
  getStatus = () => this.#status;
}

/*
  We're using the class 'Person' do declare the type
  of our 'joe' constant.
*/
const joe: Person = new Person("Joe Smith", 32, true);

console.log(joe.getStatus()); // ✔️
console.log(joe.#status); /* ❌ Property 'status' is private and only
                                accessible within class 'Person'. */
```

Now, what if something can be more than one type?

```typescript
// if something can be literally any type, we can just say any
function argChecker(arg: any) {
  if (typeof arg === "string") return "It's a string";
  return null;
}

/*
  The argument 'arg' can be anything. If it's a string, we return a string.
  However, if it's any other type, it will return 'null'.
  So this function only returns two types; string and null.

  Let's declare those types for the return of our function:
*/
function argChecker(arg: any): string | null {
  if (typeof arg === "string") return "It's a string";
  return null;
}
```

In JavaScript, if you want to say "or" you use the `||` operator. But, when you declare your types you only want to use one `|`.

We can do some fancy stuff with declaring array's as well:

```typescript
// Here are two common ways to declare types of our arrays
const animals: Array<string> = ["lion", "wolf", "hippo"];
const animals: string[] = ["lion", "wolf", "hippo"];
```

Finally, when declaring types for things that return a promise, we can use this syntax:

```typescript
function myPromise(): Promise<string> {
  return new Promise(() => "It's a promise");
}
```

### Conclusion

And that's about it for today folks! I didn't cover every aspect of TypeScript today. My main goal was to brush over the basics of everything you need to get started being able to use TypeScript today.

I'm very passionate about creating full-stack applications with React, Next.js, Node, and GraphQL. So be looking forward to more blogs about using TypeScript in the context of those technologies as well! 🔥 Thanks for reading! Take it easy. 😎
