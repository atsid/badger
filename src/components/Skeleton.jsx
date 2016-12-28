import React from 'react';
import {
  AppBar,
  Drawer,
  FlatButton,
} from 'material-ui';
import { Router } from 'react-router';

export default class Skeleton extends React.Component {
  constructor() {
    super();
    this.state = { loading: true, user: null };
  }

  componentDidMount() {
    this.getStateFromStore();
  }

  onNavToggle() {
    return this.nav.toggle();
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
    const menuItems = [
      { route: '/', text: 'Home' },
      { route: '/mine', text: 'My Projects', disabled: !this.state.user },
    ];

    if (this.state.user) {
      menuItems.push({ route: '/logout', text: 'Logout' });
    } else {
      menuItems.push({ route: '/login', text: 'Login' });
    }

    const appBarRightLabel = this.state.user ? this.state.user.name : 'Login';
    return (
      <div>
        <Drawer
          ref={e => (this.nav = e)}
          menuItems={menuItems}
          docked={false}
          onChange={this.onNavChange}
        />

        <header>
          <AppBar
            title="Badger"
            onLeftIconButtonTouchTap={this.onNavToggle}
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
