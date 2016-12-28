import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Application Components
import NoMatch from './NoMatch';
import Skeleton from './Skeleton';
import Dashboard from './Dashboard';
import Login from './Login';
import MyProjects from './MyProjects';
import OrgProjects from './OrgProjects';
import UserProjects from './UserProjects';
import stores from './../stores';

export default class Application extends React.Component {
  getChildContext() {
    return { stores };
  }

  render() {
    return (
      <MuiThemeProvider>
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
      </MuiThemeProvider>
    );
  }
}

Application.childContextTypes = {
  muiTheme: React.PropTypes.object,
  stores: React.PropTypes.object.isRequired,
};
