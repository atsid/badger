import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
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

import store from '../state';

const history = syncHistoryWithStore(createBrowserHistory(), store);

const Application = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history}>
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
  </Provider>
);

export default Application;
