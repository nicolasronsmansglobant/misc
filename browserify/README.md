# Browserify

## Setup

Install browserify and http-server through npm

```
> npm install -g browserify http-server
```

## Create the app

Write your code using as entry point ```js/src/index.js```

## Compile the app

When your code is ready, you'll generate the compiled file ```js/app.js``` with browserify and include it in your html.

```
> browserify js/src/index.js -o js/app.js
```

## Test the app

```
> http-server
```
