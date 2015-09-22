const jefferson = require('express-jefferson');
const repos = require('../middleware/repos');

module.exports = jefferson.router({
  proxies: [require('express-jefferson/proxies/promise-handler')],
  routes: {
    '/': {get: [repos.getIndex]},
    '/orgs': {get: [repos.getIndex]},
    '/users': {get: [repos.getIndex]},

    '/orgs/:org': {get: [repos.getReposByOrg]},
    '/users/:owner': {get: [repos.getReposByUser]},
    '/mine': {get: [repos.getMyRepos]},
    '/all/:owner/:repo': {get: [repos.getRepoByName]},
  },
});
