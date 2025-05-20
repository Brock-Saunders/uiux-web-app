# uiux-web-app
A web application built for our UI/UX class (Fall 2024) to redesign and modernize a client website for an immigration law firm.

## Live Demo

[Demo](https://main.drkkfxnvxglxe.amplifyapp.com)

## Prequisites
[Node.js](https://nodejs.org/en/download/package-manager)

## Setup
1. `cd app`
2. `npm install --save`

## Running
1. `npm run dev`
2. Visit `http://localhost:5173/` in browser.

## Translation

Translation for the website leverages i18nexus. In order to configure strings
for translation you must have access to the project on [i18nexus](https://app.i18nexus.com/).

Unfortunately, due to the limited number of strings available with the free tier of i18nexus some of the translation had to be managed manually in the react components. This doesn't cause any issues to performance. 

Also, due the limitations of i18nexus and its google translate integration some strings don't translate properly in certain languages and will revert back to English.
