[![Build Status](https://travis-ci.org/atsid/badger.svg?branch=master)](https://travis-ci.org/atsid/badger)
[![Code Climate](https://codeclimate.com/github/atsid/badger/badges/gpa.svg)](https://codeclimate.com/github/atsid/badger)
[![Test Coverage](https://codeclimate.com/github/atsid/badger/badges/coverage.svg)](https://codeclimate.com/github/atsid/badger/coverage)
[![Dependency Status](https://david-dm.org/atsid/badger.svg)](https://david-dm.org/atsid/badger)
[![devDependency Status](https://david-dm.org/atsid/badger/dev-status.svg)](https://david-dm.org/atsid/badger#info=devDependencies)

# badger

Badger is a dashboard for viewing Key Performance Indicators for Github projects in a grid; namely, those fancy badges at the top of README.md files.

# Development

## Prerequisites
* NodeJS
* MongoDB (on Mac, `brew install mongodb`)

## Setup

# Dockerized Development
The application can be run from within Docker.
```bash
> docker-compose up
> docker-compose run app npm run develop
```

# Local Development
There is a gulp build system in place, which has a watching task: `develop`. This task will bounce the server on server-code changes and re-run linting and tests. The task will also re-bundle, lint, and test client code when it changes.
```bash
> npm install 
> gulp develop
```

## Project Layout
    └─── client/  (Client Code, ReactJS)
    └─── config/  (Configuration Management)
    └─── gulp/    (Build System Definition) 
    └─── scripts/ (Git, NPM, and Utility Scripts)
    └─── server/  (NodeJS Server Code)
