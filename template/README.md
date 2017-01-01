# Thread - Yet another Vue CLI template

> **Contains:** [vuex](https://github.com/vuejs/vuex), [vue-resource](https://github.com/pagekit/vue-resource) and [vue-router](https://github.com/vuejs/vue-router).

> **Also includes:** easy [Firebase](https://console.firebase.google.com) deployment, [Screwy](https://github.com/samueleaton/screwy) (a GUI for your NPM commands and deploying to Firebase), a choice between Bootstrap 4 or BassCSS, and a basic [Progressive Web App](https://developers.google.com/web/progressive-web-apps/) setup with a basic, optional Service Worker.

> **Grab it via:** `vue init AndersSchmidtHansen/thread <NAME>` or fork your own.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
# also opens the Screwy GUI
npm run dev

# build for production with minification
# (or use CONTROL+ALT+b to let Screwy handle it)
npm run build
```

## Deploying to Firebase :fire:
> Ensure that you have a Firebase account and that you have installed `firebase-tools` and run `firebase login`.

``` bash
# add your Firebase project ID
firebase use --add <YOUR-PROJECT-ID>

# build and deploy to Firebase
# (or use CONTROL+ALT+d) to make Screwy do it)
npm run deploy
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
