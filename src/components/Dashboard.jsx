import React from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import MyProjects from './MyProjects';

const Dashboard = ({ isLoggedIn }) => (
  isLoggedIn ?
    (<MyProjects />) :
    (<Login />)
);
Dashboard.propTypes = {
  isLoggedIn: React.PropTypes.bool,
};

export default connect(
  state => ({
    isLoggedIn: !!state.app.auth.token,
  }),
)(Dashboard);
