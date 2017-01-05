import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Router, Link } from 'react-router';
import { toggleDrawer } from '../state/actions/drawer';
import { logout as logoutAction } from '../state/actions/auth';

const Skeleton = ({
  isDrawerOpen,
  isLoggedIn,
  onToggleDrawer,
  children,
  onLogout,
}) => {
  const home = (
    <MenuItem key="menu.home">
      <Link to="/">Home</Link>
    </MenuItem>
  );
  const mine = (
    <MenuItem key="menu.mine">
      <Link to="/mine">My Projects</Link>
    </MenuItem>
  );
  const logout = (
    <MenuItem key="menu.logout" onClick={onLogout}>
      Logout
    </MenuItem>
  );
  const login = (
    <MenuItem key="menu.login">
      <Link to="/login">Login</Link>
    </MenuItem>
  );

  const menuItems = [home];
  if (isLoggedIn) {
    menuItems.push(mine);
    menuItems.push(logout);
  } else {
    menuItems.push(login);
  }

  return (
    <div>
      <Drawer
        open={isDrawerOpen}
        docked={false}
        onRequestChange={onToggleDrawer}
      >
        {menuItems}
      </Drawer>
      <header>
        <AppBar
          title="Badger"
          onLeftIconButtonTouchTap={onToggleDrawer}
        />
      </header>

      <section className="content">
        {children}
      </section>
    </div>
  );
};

Skeleton.propTypes = {
  children: React.PropTypes.node,
  onToggleDrawer: React.PropTypes.func,
  onLogout: React.PropTypes.func,
  isDrawerOpen: React.PropTypes.bool,
  isLoggedIn: React.PropTypes.bool,
};
Skeleton.contextTypes = {
  history: Router.propTypes.history,
};

export default connect(
  state => ({
    isDrawerOpen: state.app.drawer.isOpen,
    isLoggedIn: !!state.app.auth.token,
  }),
  dispatch => bindActionCreators({
    onToggleDrawer: toggleDrawer,
    onLogout: logoutAction,
  }, dispatch),
)(Skeleton);
