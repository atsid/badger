const request = require('superagent-bluebird-promise');
const BaseStore = require('./base_store');

/**
 * A data store for Projects
 */
class ProjectStore extends BaseStore {
    getProjects() {
        return request.get('/api/projects').promise().then((res) => res.body).
        catch(this.errorHandler.bind(this, 'Could not load projects'));
    }
}

module.exports = ProjectStore;
