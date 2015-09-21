const request = require('superagent');
const BaseStore = require('./base_store');
const debug = require('debug')('app:stores:project_store');

/**
 * A data store for Projects
 */
class ProjectStore extends BaseStore {
  getProjects() {
    return new Promise((resolve, reject) => {
      request.get('/api/repos/mine')
        .end((err, res) => {
          if (err) {
            debug('Could not load projects', err);
            reject(err);
          } else {
            resolve(res.body);
          }
        });
    });
  }
}

module.exports = ProjectStore;
