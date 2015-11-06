[![Build Status](https://travis-ci.org/atsid/badger.svg?branch=master)](https://travis-ci.org/atsid/badger)
[![Code Climate](https://codeclimate.com/github/atsid/badger/badges/gpa.svg)](https://codeclimate.com/github/atsid/badger)
[![Test Coverage](https://codeclimate.com/github/atsid/badger/badges/coverage.svg)](https://codeclimate.com/github/atsid/badger/coverage)
[![Dependency Status](https://david-dm.org/atsid/badger.svg)](https://david-dm.org/atsid/badger)
[![devDependency Status](https://david-dm.org/atsid/badger/dev-status.svg)](https://david-dm.org/atsid/badger#info=devDependencies)

# badger

Badger is a dashboard for viewing Key Performance Indicators for Github projects in a grid; namely, those fancy badges at the top of README.md files.

# Development
There are a few ways to get the project started. 

## Vagrant Quickstart
### Prerequisites:
 * Vagrant
 * Virtualbox
 * Ruby
```bash
> ./quickstart.sh
> vagrant ssh
> npm run develop
```

## Docker-Compose
### Prerequisites:
 * Docker
```bash
> docker-compose up
> docker-compose run app npm run develop
```

## Localhost
### Prerequisites:
 * NodeJS 4.x
 * MongoDB
```bash
> npm install 
> npm run develop
```

## Project Layout
    └─── client/  (Client Code, ReactJS)
    └─── config/  (Configuration Management)
    └─── gulp/    (Build System Definition) 
    └─── scripts/ (Git, NPM, and Utility Scripts)
    └─── server/  (NodeJS Server Code)
