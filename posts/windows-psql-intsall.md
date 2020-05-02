---
title: "Postgres Setup On Windows"
image: "https://i.imgur.com/hTdGW2y.png"
description: "In this tutorial we will go over installing PostgreSQL on a Windows 10 machine, install pgAdmin4, as well as set up our path variable for postgres so we can access postgres from our terminal."
---

## Install Postgres On Windows 10

![Banner](https://i.imgur.com/hTdGW2y.png)

In this tutorial we will go over installing PostgreSQL on a Windows 10 machine, install pgAdmin4, as well as set up our path variable for postgres so we can access postgres from our terminal.

### Installation Instructions

Go to [PostgreSQL Database Download](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) and download the version of PostgreSQL you want under the "Windows x86-64" column. Once the installer is done downloading, run that bad boy.

![Download PostgreSQL](https://dev-to-uploads.s3.amazonaws.com/i/lyj7u5viavbz1buj92sj.PNG)

Once you run the installer you downloaded, you should see a screen that looks like this:

![PostgreSQL installer](https://dev-to-uploads.s3.amazonaws.com/i/hhbi2qbd472xhq27oo14.PNG)

Click `Next >`. Then choose your installation directory:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/opydur2eo1fn24zb4mr2.PNG)

Select components. I would leave all these checked and click `Next >`.

![PostgreSQL components](https://dev-to-uploads.s3.amazonaws.com/i/rrarjp52huvkczqv22yw.PNG)

Select the data directory. I left its default value.

![PostgreSQL data directory](https://dev-to-uploads.s3.amazonaws.com/i/muhwhi6p93ovcgkgfrfa.PNG)

Set up a password for your PostgreSQL user. Do something that's really easy to remember. If you're not worried about somebody hacking and finding sensitive data in your local PostgreSQL data, you would probably be fine setting it to `password`.

![PostgreSQL password](https://dev-to-uploads.s3.amazonaws.com/i/x1ciy10djmzfjd7f3sk2.PNG)

Set up PostgreSQL port. Default is 5432, I recommend leaving it like that.

![PostgreSQL port](https://dev-to-uploads.s3.amazonaws.com/i/dqq0lhywc8b7e6s593z1.PNG)

Choose your locale. I speak English and I'm from the United States, so I choose `English, United States`.

![PostgreSQL locale](https://dev-to-uploads.s3.amazonaws.com/i/4tvx7jrt1m0z9ardi7u9.PNG)

Once we get to the pre-installation, click `Next >`.

![PostgreSQL pre-installation](https://dev-to-uploads.s3.amazonaws.com/i/4qkyn1i5376nq925z7sn.PNG)

Then click `Next >` again and it install will start!

![Install PostgreSQL](https://dev-to-uploads.s3.amazonaws.com/i/di7598ozmz1al9icqsoz.PNG)

Now, in your Windows search bar, type: `Edit the system environment variables`. Click on that and you should see this:

![Windows env vars](https://dev-to-uploads.s3.amazonaws.com/i/mayp5zm5rvba6pzq00fe.PNG)

Then click on the `Environment Variables` button.

![User env vars](https://dev-to-uploads.s3.amazonaws.com/i/3vjxmcxyzcfwrex5f60q.PNG)

Click on PATH under user variables and then `Edit...` and then add the path to your PostgreSQL's bin folder to the list of locations in your PATH variable.

![PostgreSQL path](https://dev-to-uploads.s3.amazonaws.com/i/oignl8pyjpfnnfoh2e6w.PNG)

Click `OK` then `OK` and `OK` again. Once you've closed out of everything you should open up your terminal and type `psql -U postgres` and it will ask you for PostgreSQL's password. Whatever you set it as during the installer will be what you want to type in, and tada! 🎉 You can now use PostgreSQL in the terminal now!
