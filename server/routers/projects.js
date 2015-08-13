const jefferson = require('express-jefferson');
const github = require('../middleware/github');

module.exports = jefferson.router({
    proxies: [require('express-jefferson/proxies/promise-handler')],
    routes: {
        '/': {
            get: [ github.getProjects ],
        },
    },
});
