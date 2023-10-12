# SuperHero Search

This is the repository of the project I prepared to access the Alkemy acceleration.

## Correction Note 3/3/22

The login function was removed due to issues with the API where the POST request was sent, to which I do not have access.

## Correction Note 30/11 (Second delivery of the Challenge)

The following were added:

- Mobile-First design (solution for hovers, responsive design, and media queries, with a primary focus on mobile).
- Environment variables in the .env file.
- Supplementary SDK (utils/functions.js) that consolidates functions that were previously executed directly from the component.
- Basic tests for the Login component.

## Superhero App
### ---NOT AVAILABLE---
What you can see in this repository is an app for viewing superheroes/superheroines and adding them to your team.

To access it, you will need to log in with the email __challenge@alkemy.org__ and the password **react**.

![Login](imgReadme/login.png "Login")

The **API** we will be using is the [SuperHeroAPI](https://superheroapi.com/).

## Features

Among the features, you can search for heroes from the API, add them to your team (they can be good or bad),

![Search](imgReadme/heros.png "Search")

![Team](imgReadme/team.png "Team")

![Good Team](imgReadme/goodteam.png "Good Team")

check detailed information about each hero,

![Info](imgReadme/info.png "Info")

and remove them from your team if you are not satisfied.

Additionally, you have information about the power stats of each hero in your team, and a sum of the total stats (and averages of weight and height). The stat with the highest points in your team is highlighted in a different color.

## Login

The login has the particularity that when the email and password information is sent, it retrieves a token and stores it in LocalStorage to avoid having to log in every time you enter the app.

## Installation

- First, clone the repository with **git clone https://github.com/Chriscaracach/alkemyChallengeCaracach**,

- Then, install the dependencies with **npm install**.

- Run it on your computer with **npm start**.

## If you are only interested in using the app without viewing the repository, you can access it [HERE](https://alkemychallengeccaracach.web.app/).
