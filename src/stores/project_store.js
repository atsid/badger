const request = require('superagent-bluebird-promise');

function getReposFromUrl(url) {
  return request.get(`${process.env.API_URL}/${url}`)
    .then(res => res.body);
}

/**
 * A data store for Projects
 */
class ProjectStore {
  getMyProjects() {
    return getReposFromUrl('repos/mine');
  }

  getOrgProjects(org) {
    return getReposFromUrl(`repos/orgs/${org}`);
  }

  getUserProjects(user) {
    return getReposFromUrl(`repos/users/${user}`);
  }
}

module.exports = ProjectStore;
