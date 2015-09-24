const debug = require('debug')('app:stores:project_store');
const request = require('superagent-bluebird-promise');

/**
 * A data store for Projects
 */
class ProjectStore {
  getMyProjects() {
    return request.get('/api/repos/mine')
        .then((res) => {
          debug('my projects: ', res.body);
          return res.body;
        })
        .catch((err) => debug('could not load projects', err));
  }
}

module.exports = ProjectStore;
