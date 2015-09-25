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
const OrgProjects = require('./OrgProjects');
const UserProjects = require('./UserProjects');

// MUI
const mui = require('material-ui');
const ThemeManager = new mui.Styles.ThemeManager();
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
const injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

const createBrowserHistory = require('history/lib/createBrowserHistory');

const Application = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object,
    stores: React.PropTypes.object.isRequired,
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
      stores: require('./../stores'),
    };
  },

  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Route path="/" component={Skeleton}>
          <IndexRoute component={Dashboard} />
          <Route path="login" component={Login} />
          <Route path="mine" component={MyProjects} />
          <Route path="org/:org" component={OrgProjects} />
          <Route path="user/:user" component={UserProjects} />
          <Route path="*" component={NoMatch} />
        </Route>
      </Router>
    );
  },
});
module.exports = Application;
