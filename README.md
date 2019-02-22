# Congress-Ember [![CircleCI](https://travis-ci.org/jalandis/congress-ember.svg?branch=master)](https://travis-ci.org/jalandis/congress-ember)

## Docker Shortcut

To avoid installing node and npm versions on my laptop, I will be using a Docker container.  This is necessary to ensure stability on my only available development machine.

    docker run --rm -ti -v $(pwd):/myapp -p 4200:4200 -p 7020:7020 -p 7357:7357 danlynn/ember-cli:3.7.1

This will spin up a [local Ember site](http://localhost:4200) with live-reload for convenient developement but the [Congressional Go API](https://github.com/jalandis/congress-go-api) server will still be needed for data access.  See the [Congression Go API README](https://github.com/jalandis/congress-go-api/blob/master/README.md) for instructions on the setup of this required component.

The site should be accessible from **http://localhost:4200** while the docker container is running.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone https://github.com/jalandis/congress-ember`
* `cd congress-ember`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

There is currently no deploy process.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
