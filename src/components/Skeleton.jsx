import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import { Router, Link } from 'react-router';

export default class Skeleton extends React.Component {
  constructor() {
    super();
    this.state = { loading: true, user: null, drawerOpen: false };
  }

  componentDidMount() {
    this.getStateFromStore();
  }

  onNavToggle() {
    this.setState({
      ...this.state,
      drawerOpen: !this.state.drawerOpen,
    });
  }

  onNavChange(e, key, payload) {
    // Do DOM Diff refresh
    this.context.history.pushState(null, payload.route);
  }

  getStateFromStore() {
    this.state = { projects: [], loading: true };
    return this.context.stores.users.getCurrentUser()
      .then(user => this.setState({ user, loading: false }))
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  render() {
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
      <MenuItem key="menu.logout">
        <Link to="/logout">Logout</Link>
      </MenuItem>
    );
    const login = (
      <MenuItem key="menu.login">
        <Link to="/login">Login</Link>
      </MenuItem>
    );

    const menuItems = [home];
    if (this.state.user) {
      menuItems.push(mine);
      menuItems.push(logout);
    } else {
      menuItems.push(login);
    }

    const appBarRightLabel = this.state.user ? this.state.user.name : 'Login';
    return (
      <div>
        <Drawer
          ref={e => (this.nav = e)}
          open={this.state.drawerOpen}
          docked={false}
          onChange={() => this.onNavChange()}
          onRequestChange={() => this.setState({
            ...this.state,
            drawerOpen: !this.state.drawerOpen,
          })}
        >
          {menuItems}
        </Drawer>

        <header>
          <AppBar
            title="Badger"
            onLeftIconButtonTouchTap={() => this.onNavToggle()}
            iconElementRight={<FlatButton label={appBarRightLabel} />}
          />
        </header>

        <section className="content">
          {this.props.children}
        </section>
      </div>
    );
  }
}
Skeleton.propTypes = {
  children: React.PropTypes.node,
};
Skeleton.contextTypes = {
  history: Router.propTypes.history,
  stores: React.PropTypes.object.isRequired,
};
