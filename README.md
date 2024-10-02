# uiux-web-app
Web Application for UI UX Class: Fall of 2024.

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

In order to change the language for the website you must add in the `lng` query string.

```
http://127.0.0.1:5173/?lng=es
```