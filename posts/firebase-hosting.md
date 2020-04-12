---
title: "Firebase Hosting 101"
image: "https://res.cloudinary.com/practicaldev/image/fetch/s--h1B5oG-3--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/rcrwu7fyg6guy7na0xv1.png"
description: "Firebase is an incredible platform to connect any iOS, android and/or web app too.  By connecting your project to Google's Firebase you will have access to their cloud storage, cloud firestore and real-time database, authentication, analytics and much more."
---
## Prerequisites

![Banner](https://res.cloudinary.com/practicaldev/image/fetch/s--h1B5oG-3--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/rcrwu7fyg6guy7na0xv1.png)

- GitHub account (having bash set up and knowing a few basic .git commands in the terminal will come in handy!)
- Firebase account
- Node.js installed (Optional: Install yarn as well, if you don't already have it. I will be using yarn mostly in this project.)
Firebase tools globally installed: `npm i --global firebase-tools` **or** `yarn global add firebase-tools`. Don't forget to add `sudo` if you're on mac or Linux when installing packages globally.
- You should also have serve installed so we can run our build folder on a local server. More on why later, to install serve globally simply use: `npm i --global serve` **or** `yarn global add serve`.

### About this tutorial

Firebase is an incredible platform to connect any iOS, android and/or web app too.  By connecting your project to Google's Firebase you will have access to their cloud storage, cloud firestore and real-time database, authentication, analytics and much more.
Firebase handles all of our hosting and back end needs in one place that is incredibly easy to use, once you got the know-how.

In this tutorial, we are going to cover only how to deploy a react app to Firebase. I am going to use the create-react-app we've hosted in the next tutorial on how to set up user authentication with Firebase using hooks and redux so stay tuned for that!

### Let's get started

#### Step 1

Let's start by creating a new project on GitHub!

**_Fig. 1_**
![Create a new GitHub repo](https://thepracticaldev.s3.amazonaws.com/i/cjo298ycg3fqan173v1m.png)

Now let's name our project, and we can give it a description and an MIT license if we want to. I did not give it a README or a .gitignore because CRA will give us both of those things.

**_Fig. 2_**
![Set up project](https://thepracticaldev.s3.amazonaws.com/i/42fvecwtvn7fc9ayik4s.png)

Now that our project has been created on GitHub lets copy that HTTPS or SSH (whichever you use) link and clone it to our computer!

**_Fig. 3_**
![Copy repo link](https://thepracticaldev.s3.amazonaws.com/i/ehn8n8cpas5934i7jgd2.png)

Once we've cloned our project in the directory we want to use, before we cd inside of that directory we can run `create-react-app <name-of-your-project>` and it will run CRA inside of the repo we just cloned as long as we name it the same as the cloned repo when we run CRA. Now we have our CRA in the root and can cd inside our project directory and `yarn start`. *Note: If you want to use npm, then delete your yarn.lock file so that you don't have a yarn.lock AND a package-lock.json file in the same project. This can lead to issues, however, I personally recommend sticking with yarn.*

**_Fig. 4_**
![Clone and run CRA in your cloned repo](https://thepracticaldev.s3.amazonaws.com/i/hwis1jhwu7te8khpbm4j.png)

#### Set 2

Now that we have our project set up in GitHub and cloned to our computer lets set up our project in Firebase! Go to firebase.google.com and create a project.

**_Fig. 5_**
![Create a project](https://thepracticaldev.s3.amazonaws.com/i/83i41i0quig4er2bau1e.png)

Name your project.

**_Fig. 6_**
![Name your project](https://thepracticaldev.s3.amazonaws.com/i/ho19lyz68y2qptq621yc.png)

Google Analytics is enabled by default, we might want to use it later so let's leave it that way.

**_Fig. 7_**
![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/f1wur6354icprv91uey1.png)

Let's just select the "Default Account for Firebase" option for now.

**_Fig. 8_**
![Select "Default Account for Firebase"](https://thepracticaldev.s3.amazonaws.com/i/xycxxp3i5kbhu9dewt8v.png)

Congratulations, you now have a Firebase project!

**_Fig. 9_**
![Firebase project](https://thepracticaldev.s3.amazonaws.com/i/tuuo8av1fnzdi2skzds1.png)

#### Step 3

Now that we have our GitHub repo created and cloned to our computer and we've created our project on firebase it's time to connect the two together and get our React app out there for the world to see! Let's take a dive into our terminal and set things up! In our project's root directory lets run `firebase login` and select yes when it asks up to allow Firebase to collect information.

**_Fig. 10_**
![Firebase login](https://thepracticaldev.s3.amazonaws.com/i/at1iyj3m6c5afybkor56.png)

After selecting 'yes' it will open our browser and ask which google account we want to use to sign in. Select the account we used to create our Firebase project.

**_Fig. 11_**
![Choose Google account you want to log in as](https://thepracticaldev.s3.amazonaws.com/i/hzjd0eu1v26ab6ledw56.png)

Now let's allow Firebase CLI to use our Google account:

**_Fig. 12_**
![Allow Firebase CLI access to chosen Google account](https://thepracticaldev.s3.amazonaws.com/i/gsqduvbmsqwy9y7ymmeo.png)

And, wallah!!! We are now logged into Firebase and can use our Firebase account in our terminal.

 **_Fig. 13_**
![Successfully logged in](https://thepracticaldev.s3.amazonaws.com/i/pen7bngv4y9t1nzwwftz.png)

#### Set 4

Now it's time to create a build folder that will be the source we want Firebase to look at when it deploys our web app. To do this simply run `yarn build` **or** `npm run-scripts build`

 **_Fig. 14_**
![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/qexwrqbxgbcm00zsgr4k.png)

Then we can run `serve -s build`. This will run our build folder on a local server. The build folder will only update every time you run `yarn build` **or** `npm run-scripts build`. You could go into your build folder and manually edit it, however, I would not recommend doing that.

When we deploy our app on firebase we want to deploy what's in our build folder, so it's a good idea to spin it up on a local server and make sure everything looks and works right. Once you have verified that the build was successful you could `ctrl/cmd + c` to stop the server inside our server and we can move on to the next step...

**_Fig. 15_**
![Running build folder on localhost:5000](https://thepracticaldev.s3.amazonaws.com/i/wc3kyx6ju4bpgeff780p.png)

#### Step 5

It's time to initialize firebase in our app! The command is `firebase init`. It will ask you which Firebase CLI features you want to set up. Use the down arrow key to highlight Hosting and then press the space-bar to select. Once you've selected Hosting, hit enter/return to continue.

**_Fig. 16_**
![Select 'Hosting' option](https://thepracticaldev.s3.amazonaws.com/i/dduzpo2eg9qq3jxaayhy.png)

Now select `Use an existing project`.

**_Fig. 17_**
![Select 'Use an existing project'](https://thepracticaldev.s3.amazonaws.com/i/o1ns97wil6vzn9edhzcs.png)

Now let's select that project we created on Firebase earlier, we only have one project created, and we see that's the only option here.

**_Fig. 18_**
![Select our Firebase project](https://thepracticaldev.s3.amazonaws.com/i/0o0s370h4bkdbfyi6j22.png)

It's now asking us what we want to the user as our public directory. We want to type in `build` here so that we are hosting what we've built to our build folder.

**_Fig. 19_**
![Use our build folder as our public directory](https://thepracticaldev.s3.amazonaws.com/i/0u51rfpjzuyrz4b1cmap.png)

Our project will be a single page React app so, we are going to want to say y for yes when it asks us how we want to configure our app.

**_Fig. 20_**
![Say yes to single page app](https://thepracticaldev.s3.amazonaws.com/i/04ayiqameiea18p1mx7h.png)

Then it's going to ask us if we want to overwrite our build/index.html. Let's give this a big fat N for NO WAY! If we say yes, Firebase will overwrite that file with Firebase's own boilerplate index.html and we will see that instead of our site. If you do accidentally say yes here then all you have to do is run `yarn build` **or** `npm run-scripts build` again to overwrite Firebase's index.html and get our site back up and view-able again.

**_Fig. 21_**
![Do not overwrite build/index.html](https://thepracticaldev.s3.amazonaws.com/i/o3lwdhr78ogntq1eama5.png)

And wallah!!! Firebase is initialized and it is time to...

#### Step 6

**Deploy!!!**
Type `firebase deploy` into the terminal and Firebase will deploy your site and give you back a hosting URL that you can go to and see your site live on the internet for the world to see! Congratulations, friend. We made it!

**_Fig. 22_**
![We'll do it live!](https://thepracticaldev.s3.amazonaws.com/i/obvfc8m2qssysnyjf94z.png)

**_Fig. 23_**
![You can see when we visit the hosting URL we can see our CRA](https://thepracticaldev.s3.amazonaws.com/i/jxzxiougyxmcqyssy4kv.png)

Thanks for following along with me this far. I'm going to use this project as the base for my next Firebase tutorial where we will go over authentication and Redux using hooks, so be sure to subscribe and stay tuned! *Cheers*
