const request = require('superagent-bluebird-promise');
const debug = require('debug')('app:stores:project_store');

function getReposFromUrl(url) {
  return request.get(url)
    .then((res) => res.body)
    .catch((err) => debug('could not load projects', err));
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
