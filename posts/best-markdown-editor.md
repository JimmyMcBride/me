---
title: "Best Markdown Editor"
image: "https://i.imgur.com/WWVpqS9.png"
description: "Best Markdown Editor is a website I built recently to help me write, edit, and export all of my markdown files. I created this because I felt a need to consolidate and simplify my markdown workflow."
date: 1590969600
---

## Best Markdown Editor

![I love markdown banner](https://i.imgur.com/WWVpqS9.png)

## Overview

[Best Markdown Editor](https://www.bestmarkdowneditor.com) is a website I built recently to help me write, edit, and export all of my markdown files. I created this because I felt a need to consolidate and simplify my markdown workflow. I began writing all of my blogs and markdown files in VS Code then I paste them in [dev.to](https://dev.to). I would write in VS Code first because I need a markdown file that I can add to my Next.js blog, then I would paste it in Dev's editor, and (since it's a website), I would get Grammarly to proofread my blog for me. I would make the Grammarly edits and then paste those changes back into my markdown file so everything would be uniform.

### The Search

I didn't know how I would solve this issue for quite some time until my buddy threw a blog my way, [Top 15: Best Rich Text Editor Components for ReactJS](https://ourcodeworld.com/articles/read/1065/top-15-best-rich-text-editor-components-wysiwyg-for-reactjs). Which immediately struck me as an essential step in the right direction. So I did some more research on Markdown editor components in React and came across this gem, [10+ Awesome React Markdown Editor Components](https://onaircode.com/react-markdown-editor-components/). In the number 2 spot is the editor [For Editor](https://github.com/kkfor/for-editor). It looked clean and feature-rich, so I decided to spin up a react app and test it out. It turns out it was a breeze to set up and use out of the box!

### Tech Stack

You can find the code for my open-source GitHub organization [here](https://github.com/Best-Markdown-Editor).

#### Front End

- TypeScript
- React
- Firebase Auth
- Firebase Cloud Storage
- React Hook Form
- Font Awesome
- Sriracha UI (a custom style library I built for React)

#### Back End

- TypeScript
- Express
- Knex
- PostgreSQL

### Features

When you come to [Best Markdown Editor](https://www.bestmarkdowneditor.com), you can start by clicking on the "Demo Page" link and try out the editor for yourself. I save everything in local storage, so you don't have to worry about losing progress. But if you sign in, you will have **all** of your markdown files saved to a database, with the ability to manage them as you please. By sign up, you can also use the image upload feature to upload images from your computer to your file as a URL markdown tag. Also, you will be able to export your markdown files as `.md` files directly to your computer.

### What I Learned

This project was the first time I had set up cloud storage, and that was a blast. The whole thing was just a ton of fun to build. One thing I figured out in early testing was that when you download it as a PWA if the browser you downloaded it on has the Grammarly extension, you will be able to use that extension on the app you downloaded. So it's like you have a desktop app with Grammarly to edit your markdown, which I think is incredible.

### Conclusion

All in all, I had so much fun building this, and I'm looking forward to creating many new features for this web app.

One thing I would like to do is build a folder system, where the folders store _published versions_ of a user markdown files in a folder. The user can then use their credentials to hit my back end, where they have all of that stuff stored in front of their front end and use my database to list out their published files on their website. I also need to spend the time to make this mobile responsive. Right now, Best Markdown Editor has been optimized for tablet and desktop because, for this use case, I think are the most important. But it would be nice to have it on mobile as well.

If you deal with markdown a lot, give it a shot and let me know what you think! It's open-source as well, so don't be afraid to reach out if you would like to help out. The two things I'm most concerned about right now are creating updates for the PWA when new pushes get changed and building out a secure structure to let users hit my database for their published files if you know anything about either of those things I would love to hear from you. Thanks for reading!
