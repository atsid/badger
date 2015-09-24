const request = require('superagent-bluebird-promise');

/**
 * A data store for Projects
 */
class ProjectStore {
  getMyProjects() {
    return request.get('/api/repos/mine')
        .then((res) => res.body)
        .catch((err) => debug('could not load projects', err));
  }
}

module.exports = ProjectStore;
