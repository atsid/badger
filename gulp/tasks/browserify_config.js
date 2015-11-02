const babelify = require('babelify');
const config = require('../config');
const path = require('path');

module.exports = () => {
  return {
    entries: config.client.entries,
    transform: [
      babelify,
      'aliasify',
      'browserify-shim',
    ],
    debug: false,
    cache: {},
    packageCache: {},
  };
};
