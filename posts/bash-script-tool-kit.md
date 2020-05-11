---
title: "Bash Script Tool Kit"
image: "https://res.cloudinary.com/practicaldev/image/fetch/s--8Jv9KS----/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/4n4gq7l7gxosv6uqj9il.jpeg"
description: "The purpose of this blog is to serve as a reference (or tool kit) of different bash commands, that you can use as you start creating new bash scripts, and to help open the door of endless possibilities of productivity the world of bash scripts has to offer."
---

## Bash Script Tool Kit 🛠

![Banner](https://res.cloudinary.com/practicaldev/image/fetch/s--8Jv9KS----/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/4n4gq7l7gxosv6uqj9il.jpeg)

In my blog [Write A Bash Script 101](https://dev.to/jimmymcbride/write-a-bash-script-101-4n2p), I write about how to make a simple bash script from scratch. The purpose of this blog is to serve as a reference (or tool kit) of different bash commands, that you can use as you start creating new bash scripts, and to help open the door of endless possibilities of productivity the world of bash scripts has to offer.

### Pushd And Popd

I go over pushd and popd in [this blog](https://dev.to/jimmymcbride/bash-alias-2og6) about aliases. Aliases are a great way to basically _write one line bash scripts_, so I recommend checking it out if you are unfamiliar with bash aliases. Pushd and popd offer an alternative to cd that has a history you can pop backward through. Although, it's doesn't have to completely replace cd.

Say you're in `~/Downloads` directory and you `pushd ~/Documents/projects/my-project` and then you want to go back to just the projects directory. If you use `popd` then it will take you back to the Downloads directory, so if you want to go to projects directory you have 2 choices:

- `pushd ~/Documents/projects` We have to use an **absolute path** here because we don't have a way to just move up a directory. **Pro** you keep the pushd history going. **Con** you have to type a little more.
- `cd ..` You move out of the directory into the parent directory. **Pro** easy to type. **Con** you break the `pushd` history chain.

> Note: If you have an alias for the projects directory because you use it so often, when you're in your actual project folder you can just type the alias for that projects directory to bring you back and keep the pushd history chain going without typing the whole **absolute path**.

### Absolute vs Relative Paths

If you're in your projects directory and you `cd my-project/` or `pushd my-project` you are typing a **relative path**. A relative path is a path that is relative to the current directory you are in.

An **absolute path** would look like; `cd ~/Documents/projects/my-project/` or `pushd ~/Documents/projects/my-project/`. This will take you to your my-projects directory no matter where you are in your filesystem, which can be really powerful when used in bash scripts.

### Variables

Variables are in many coding languages. In bash, variables are usually named in all caps and a \$ is called in front to let bash know it's a variable.

#### Declaring a variable

The typical syntax for declaring a variable:

```bash
NAME="Jimmy McBride"
```

Now if you were to save that to your .bashrc file and reload your terminal and type in `echo "$NAME"` it should return "Jimmy McBride".

#### Bash variables

Bash comes with a few variables already that you can use. Here are some I use the most:

- \$PATH: returns to you all the paths to bin folders you can use to put your bash scripts in.
- \$HOME: returns to you your home route. Usually looks like `home/username`
- \$USERNAME: returns your username.
- \$PWD: returns your Present Working Directory
- $1, $2, etc: When you type the name of your bash script it runs the file. You can also type in extra arguments. If you do \$1 becomes the first argument you typed after the name of your script and so on.

#### Example: File name -> new-project

```bash
#!/bin/bash

# Push to projects directory with an absolute path
pushd ~/Documents/projects

# Run create-react-app in projects directory
yarn create react-app "$1"

# Move inside the new project folder with a relative path
pushd "$1"

# Open project in VS Code
code .

# Start server
yarn start
```

Here we can type `new-project my-project` and it will create a new react app with the name of our first argument ('my-project' in this case) and then move inside that directory, open the project in VS Code and start the server.

Since we used an absolute path at the beginning of our script, it will take us to the projects directory from anywhere in our file system, where we use this command and run create-react-app in the appropriate directory. We only need to use a relative path to move inside the project directory because we are already in the folder we need to be in.

### Copy or Move Files and Directories

Syntax for moving files:

```bash
mv <target> <destination>
# or
mv <target> <target> <destination>

# Examples

# Moves file1 into folder1
mv file1 folder1

# Moves file1 and file2 into folder1
mv file1 file2 folder1

# Moves folder1 and file1 into folder2
mv folder1 file2 folder1
```

The syntax for copying files and folders is:

```bash
cp <target> <destination>

# Copies file1 into folder1
cp file1 folder1

# If you want to copy an empty folder somewhere:
cp folder1 folder2

# If the folder is not empty, you want to copy it recursively:
cp -r folder1 folder2
```

### Conclusion

These are just a few of the many tools bash has to offer when writing your scripts. I've found that I see myself using these commands the most. As I learn more and get better at writing bash script I will update this blog so be sure to add it to your reading list! What are some of your favorite bash commands you use? I would love to hear your thoughts and opinions in the comments below!
