---
title: "Write A Bash Script 101"
image: "https://res.cloudinary.com/practicaldev/image/fetch/s--y67RfP8r--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/g5hre048t082zdqhfgr2.jpeg"
description: "If you have been creating/changing directories left and right, touching new files, slinging out some basic git commands, opening your favorite code editor from the terminal, running servers and you're ready to take things to the next level, this blog is for you my friend!"
date: 1576454400
---

## Write A Bash Script 101

![Banner](https://res.cloudinary.com/practicaldev/image/fetch/s--y67RfP8r--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/g5hre048t082zdqhfgr2.jpeg)

Writing your own bash scripts can be super useful and save you a TON of time. If you have been creating/changing directories left and right, touching new files, slinging out some basic git commands, opening your favorite code editor from the terminal, running servers and you're ready to take things to the next level, this blog is for you my friend!

### Path variable

First things first, you're going to want to put your script in the right folder! But which folder? Your bin folder of course. Where is your bin folder? Well, that's where the PATH variable comes in. Open up your terminal and type `echo $PATH`. It should return something that looks like:

```bash
/home/jimmy/.local/bin:
/usr/local/bin:
/usr/local/sbin:
/usr/bin:
/usr/lib/jvm/default/bin:
/usr/bin/site_perl:
/usr/bin/vendor_perl:
/usr/bin/core_perl:
/home/jimmy/bin
```

If you don't have a bin folder in your home directory you can create one and your path variable SHOULD pick it up. After you make a bin in your home directory close out of the terminal and open it again and run `echo $PATH` again to see if **home/username/bin** is apart of your path now. If it doesn't show up in your path, then we can edit our .bashrc file located in the home folder.

**What if I don't have a .bashrc file?**

If you don't have a .bashrc file, you can just create a .bashrc file in your home directory. If you're in the terminal you can `touch .bashrc` to make the file and open it with your favorite text editor. Since I'm on Linux, and not a VIM guru, I use nano to edit text files from the terminal most of the time. The important thing is that you open up this .bashrc in some kind of text editor and add this to it:

```bash
#!/bin/env bash

# Exports home/username/bin to PATH variable
export PATH=$PATH:$HOME/bin
```

Once you have that in a .bashrc file, closeout and reopen your terminal. Type `echo $PATH` again and you should see your **home/username/bin** location pop up in your path now.

#### Pro Tip

> If you don't want to close and reopen your terminal every time you make a change to your .bashrc you can reload your terminal with the command `source ~/.bashrc`. However, even this can get a little burdensome when making a lot of changes. So, I created an alias for this command. Now, all I have to do to reload the terminal, with my new .bashrc changes, is type `reload`. Aliases are ways to take long things, that you type often, and execute that command by typing a lot less. If you want to see a list of alias's I commonly use, you can [check them out here](https://dev.to/jimmymcbride/bash-alias-2og6).

```bash
#!/bin/env bash

# Exports home/username/bin to PATH variable
export PATH=$PATH:$HOME/bin

# Alias for reloading terminal
alias reload="source ~/.bashrc"
```

Now that we have that setup, let's `cd bin/` and create a file for our bash script. You can name the file anything you want, let's create a super simple bash script here: `touch hello`. This creates a file named hello. Time to open this file up in a text editor and start writing some code!

```bash
#!/bin/bash
# ^ Always include shebang (#!) followed by the language of the script.

# Always leave good comments in your code!

# Prints: "Hello, world!" to the screen.
echo "Hello, world!"
```

If you try and type `hello` into the terminal now you will get a **"Permission denied"** error. That's cause we haven't made it an executable yet! To turn your script into an executable file, it's as easy as `chmod 755 hello`! Also, `chmod +x hello` will do the job just fine.

There we go! We've created our first bash script! There's so much you can do with this now! If you would like to see an example of a more useful bash script [check out this blog](https://dev.to/jimmymcbride/create-react-app-bash-script-update-49da), where I make a bash script to run a create-react-app template, open it my editor and start the server all in one easy command.
