const request = require('superagent-bluebird-promise');

function getReposFromUrl(url) {
  return request.get(url)
    .then((res) => res.body));
}

/**
 * A data store for Projects
 */
class ProjectStore {
  getMyProjects() {
    return getReposFromUrl('/api/repos/mine');
  }

  getOrgProjects(org) {
    return getReposFromUrl(`/api/repos/orgs/${org}`);
  }

  getUserProjects(user) {
    return getReposFromUrl(`/api/repos/users/${user}`);
  }
}

module.exports = ProjectStore;
