const debug = require('debug')('app:stores:base_store');

class BaseStore {

    /**
     * Generic error handler
     * @param err The error that occurred
     */
    errorHandler(genericMessage, err) {
        debug(genericMessage, err);
    }
}

module.exports = BaseStore;
