---
title: "Best Markdown Editor"
image: "https://firebasestorage.googleapis.com/v0/b/best-markdown-editor.appspot.com/o/images%2Fheroku.png?alt=media&token=defb3b3d-08db-4d31-aeb9-ada552509c5d"
description: "Heroku is an amazing hosting platform for any project. Today, I spun up a create Next app to show you how easy it is to set up a Heroku pipeline connected to a GitHub repository and have your project, front or back end, deployed in minutes with a wonderful staging environment set up."
date: 1590364800
---

## Deploy With Heroku Pipeline

![heroku.png](https://firebasestorage.googleapis.com/v0/b/best-markdown-editor.appspot.com/o/images%2Fheroku.png?alt=media&token=defb3b3d-08db-4d31-aeb9-ada552509c5d)

## Overview

Heroku is an amazing hosting platform for any project. Today, I spun up a create Next app to show you how easy it is to set up a Heroku pipeline connected to a GitHub repository and have your project, front or back end, deployed in minutes with a wonderful staging environment set up.

Having a good staging environment set up can save you from accidentally running production. Trust me, I've been there. Thankfully you don't have to be a tech wizard to set up your project the right way. Setting up a pipeline for your project is as easy as hosting it. So, without further ado, let's dig in.

---

![GitHub repository](https://dev-to-uploads.s3.amazonaws.com/i/hky92ip3kiqk3yjoxzw0.png)

This is the package.json for my project. In Next.js applications, you need to add `-d $PORT` to the end of your start script and add a `heroku-postbuild` script as well. You don't need to do that for a react app, however. It's good to go out of the box.

For back end node projects, you want to have a start script that runs your main file.

```json
{
  "scripts": {
    "dev": "nodemon src/index.js",
    "start": "node src/index.js"
  }
}
```

Heroku uses `npm start` to deploy your node project. You can change and edit your Heroku dynos if you want... for money!

![for money](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FFWfURU6rf4hAk%2Fgiphy.gif&f=1&nofb=1)

Also, for back end projects you want to be passing your port number as an env variable so heroku can serve it on it's own port.

```javascript
app.listen(process.env.PORT || "4000", () => {
  console.log("Running on ${process.env.PORT || "4000"}!`)
}
```

One last tip for making sure you have a successful hosting experience is to make sure you have either a package-lock.json or a yarn.lock, but never both. When you npm install packages it creates a package-lock.json and when you yarn install you get a yarn.lock.

If you have both files then heroku won't know what to do and freak out.

![freaking out](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs18670.pcdn.co%2Fwp-content%2Fuploads%2Fbreathing-in-and-out.gif&f=1&nofb=1)

One solution that can be particularly useful when working in a group project is adding the one your not going to be using to your .gitignore. So if you are using yarn, add `package-lock.json` to your .gitignore and if you're using npm, add `yarn.lock`.

Once all of those things and good to go, your ready to make the magic happen!

![magic](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F25.media.tumblr.com%2Ftumblr_m3gzxnu8XZ1r4xouyo1_250.gif&f=1&nofb=1)

We are going to go to our heroku dashboard, where we can see all of our projects and click on new > create new pipeline.

![create new pipeline](https://dev-to-uploads.s3.amazonaws.com/i/6usjrmhwn2h7r7yctfto.png)

Then we can give our pipeline a name and connect it to our repository. In my case, I'm going to choose the repository I created named `next-app`. Once you have done that, we can click on `Create pipeline`.

![set up pipeline](https://dev-to-uploads.s3.amazonaws.com/i/7a89ce5qj6a4duspkn8m.png)

Once you have created your pipeline, you will see a page with three sections: review apps, staging, production.

![pipeline](https://dev-to-uploads.s3.amazonaws.com/i/e74f3a54zx7mpy8vpoey.png)

In the staging section, click `Add app` then `Create new app...`.

![create staging app](https://dev-to-uploads.s3.amazonaws.com/i/d8nnlxmuqcl1al3gqrig.png)

Name you staging app. I named mine `next-app-stage`. You're going to have multiple URLs in your staging to production set up, so it's good to reflect that in how you name them. Once you have your app named and have the appropriate region selected (I live in USA, so I keep it default), click on `Create app` at the bottom.

Now we can see our `next-app-stage` app hanging out in the stage tab. Let's click on that app.

Once we are viewing that app we just created, we can click on the deploy tag and see that Heroku has already taken the liberty of connecting our repository to the app.

![deploy tab](https://dev-to-uploads.s3.amazonaws.com/i/lbfomqxuhbutpy47uvqe.png)

Now if our project has any env variables we want to set those fist. Click on `settings` > `Reveal config vars` to do so. My project does not have any env variables to add, so I'm just going to scroll down and click `Enable Automatic Deploys` then on `Deploy Branch`.

Mine is set up to master branch, which is perfect.

![deployed app](https://dev-to-uploads.s3.amazonaws.com/i/83lechbrsd0e5vtdvui3.png)

My app was successfully deployed on the first go, I can click on the `view` button and see that my next app is up and running! :tada:

![next staging app](https://dev-to-uploads.s3.amazonaws.com/i/vzvw5bo3ysqffyg1tmvx.png)

Sweet! So far, so good. Now, since everything looks great, we can create our production app and push our changes to production. Woo hoo!

We can go back to our pipeline, click `Add app` and then `Create new app...` on the production tab. This time I'm going to name my app `next-app-prod` (only because `next-app` wasn't available, go figure) and then `Create App`.

![production pipeline added](https://dev-to-uploads.s3.amazonaws.com/i/x6rz1snnlzcnsqu3mo7z.png)

Since everything looked good on our staging app, we are going to go ahead and click the `Promote to production` button and then `Promote`. Changes should be promoted very quickly and then we can click on `Open app` on our production app we just created and see our site.

![production website](https://dev-to-uploads.s3.amazonaws.com/i/5fh7rpe0tvpqdnirpf24.png)

We did it! Notice the URL here. This is our production URL now. If you bought a custom domain, you want to go into the settings tab in your production app and you can manage your domain name from there. If you have bought a secure domain with SLL (which you totally should) you will have to upgrade you subscript from free to hobby (\$7 bucks a month) for heroku to manage your SLL cert for you. Which is totally worth it in my opinion.

Another amazing feature the pipeline has is that it's already set up so that if you make any pull requests to the master branch it will create a preview for that pull request that you will be able to see in the `Review Apps` section of your pipeline, so you can check every branch before it gets merged to master. Once it gets pushed to master, it will build and redeploy your stagging app. If everything still looks and works the way it should, all you have to do is promote it to production and you are ready to rock and roll!

![rock and roll](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmemecrunch.com%2Fmeme%2FAWGN%2Frock-and-roll%2Fimage.jpg&f=1&nofb=1)

[I have a YouTube video going over this as well if you would like to see a live walkthrough of the steps mentioned above.](https://youtu.be/nlBBAdkUEO4)
