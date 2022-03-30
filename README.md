[![Continuous integration](https://github.com/MetalDetectorRocks/metal-detector-frontend/actions/workflows/ci.yml/badge.svg)](https://github.com/MetalDetectorRocks/metal-detector-frontend/actions/workflows/ci.yml)

## Introduction

This repository contains the source code for the Metal Detector frontend. The application is based on React in conjunction with TypeScript.

## Prerequisites

The following software is required:

- node.js LTS or Latest
- Docker engine (e.g. Docker CE)
- Docker compose

Mac users can install **Docker Desktop for Mac** as it already includes both.

## Run frontend locally

In the project directory, you can run:

```shell
# install dependencies
npm install

# start app in development mode
npm start
````

Afterwards you can open [http://localhost:3000](http://localhost:3000) to view the app in the browser of your choice.

The page will reload if you make edits. You will also see any lint errors in the console.

## Execute tests

In the project directory, you can run:

```shell
npm test
```

## Other scripts

There are a bunch of other npm scripts which can be executed with `npm run {script name}`:

- `lint`: checks the configured lint rules
- `lint:fix`: fixes lint violations
- `format`: formats according to configured prettier rules
