const _ = require('lodash');

const domainHandlers = [
  {
    domain: 'travis-ci.org',
    getCategory() {
      return 'build';
    },
  },
  {
    domain: 'travis-url',
    getCategory() {
      return 'build';
    },
  },
  {
    domain: 'depstat-url',
    getCategory() {
      return 'dependencies';
    },
  },
  {
    domain: 'wercker.com',
    getCategory() {
      return 'build';
    },
  },
  {
    domain: 'circleci.com',
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

export default function categorize(content) {
  const handler = _.find(domainHandlers, h => content.indexOf(h.domain) > -1);
  let category = 'unknown';
  if (handler) {
    category = handler.getCategory(content);
  }
  return { category, content };
}
