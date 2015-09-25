const debug = require('debug')('app:init:rewrite_ui_route');
const config = require('config');

module.exports = {
  name: 'html5 pushstate',
  configure(app) {
    app.get(/^(?!\/api|.*\.).*/, (req, res) => {
      res.render('index', config);
    });
  },
};
