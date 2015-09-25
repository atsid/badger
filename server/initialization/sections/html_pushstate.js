const debug = require('debug')('app:init:rewrite_ui_route');

module.exports = {
  name: 'html5 pushstate',
  configure(app) {
    app.get('*', (req, res) => {
      res.sendfile('../../../public/index.html');
    });
  },
};
