const _ = require('lodash');

const domainHandlers = [
  {
    domain: 'travis-ci.org',
    getCategory() {
      return 'build';
    },
  },
  {
    domain: 'wercker.com',
    getCategory() {
      return 'build';
    },
  },
  {
    domain: 'codeclimate.com',
    getCategory(text) {
      return (text.indexOf('/coverage') > -1) ? 'coverage' : 'quality';
    },
  },
  {
    domain: 'david-dm.org',
    getCategory(text) {
      return (text.indexOf('/dev-status') > -1) ? 'devDependencies' : 'dependencies';
    },
  },
  {
    domain: 'nodei.co',
    getCategory() {
      return 'npm';
    },
  },
];

function categorize(text) {
  const handler = _.find(domainHandlers, (h) => text.indexOf(h.domain) > -1);
  let category = 'unknown';
  if (handler) {
    category = handler.getCategory(text);
  }
  return {category, content: text};
}

module.exports = categorize;
