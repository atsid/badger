const request = require('superagent-bluebird-promise');

/**
 * A data store for Projects
 */
class UserStore {
  constructor() {
    this.state = {
      currentUser: null,
      currentUserPromise: null,
    };
  }

  getCurrentUser() {
    let promise;
    if (this.state.currentUser) {
      promise = Promise.resolve(this.state.currentUser.result);
    } else if (this.state.currentUserPromise) {
      promise = this.state.currentUserPromise;
    } else {
      promise = this.state.currentUserPromise = request.get(`${process.env.API_URL}/auth/current`)
        .then((res) => {
          this.state.currentUser = { result: res.body };
          return res.body;
        })
        .catch(() => {
          this.state.currentUser = { result: null };
          return null;
        });
    }
    return promise;
  }
}

module.exports = UserStore;