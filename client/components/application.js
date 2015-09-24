const React = require('react/addons');

// Router Components
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;

// Application Components
const NoMatch = require('./NoMatch');
const Skeleton = require('./Skeleton');
const Dashboard = require('./Dashboard');
const Login = require('./Login');
const MyProjects = require('./MyProjects');

// MUI
const mui = require('material-ui');
const ThemeManager = new mui.Styles.ThemeManager();
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

const Application = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  },

  render() {
    return (
      <Router>
        <Route path="/" component={Skeleton}>
          <IndexRoute component={Dashboard} />
          <Route path="login" component={Login} />
          <Route path="projects">
            <Route path="mine" component={MyProjects} />
          </Route>
          <Route path="*" component={NoMatch} />
        </Route>
      </Router>
    );
  },
});
module.exports = Application;
