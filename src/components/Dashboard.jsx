import React from 'react';
import Login from './Login';
import MyProjects from './MyProjects';

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    return this.getStateFromStore();
  }

  getStateFromStore() {
    this.setState({ loading: true });
    this.context.stores.users.getCurrentUser()
      .then(user => this.setState({ user, loading: false }))
      .catch(() => this.setState({ loading: false }));
  }

  render() {
    let result = null;
    if (this.state.user) {
      result = (<MyProjects />);
    } else {
      result = (<Login />);
    }
    return result;
  }
}

Dashboard.contextTypes = {
  stores: React.PropTypes.object.isRequired,
};
