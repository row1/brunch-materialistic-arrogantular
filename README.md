# Brunch app

This is an opinionated AngularJS skeleton for [Brunch](http://brunch.io).  The AngularJS style guide is based upon [John Papa's guide](https://github.com/johnpapa/angular-styleguide).

This is a work in progress but the current version (0.0.3) can be viewed at [http://row1.github.io/brunch-materialistic-arrogantular/](http://row1.github.io/brunch-materialistic-arrogantular/).

It uses the following Brunch plugins:
* angularjs-templates-brunch
* auto-reload-brunch
* clean-css-brunch
* css-brunch
* git-digest-brunch
* javascript-brunch
* jshint-brunch
* sass-brunch
* uglify-js-brunch

## Getting started
* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * [Bower](http://bower.io): `npm install -g bower`
    * Brunch plugins and Bower dependencies: `npm install` (this will also run `bower install`).
* Run:
    * `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `brunch build --production` — builds minified project for production
    * `npm run test` — Runs the Jasmine tests using Karma
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)
