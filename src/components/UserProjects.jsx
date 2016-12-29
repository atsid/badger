import React from 'react';
import BadgeTableLoader from './BadgeTableLoader';

export default class UserProjects extends React.Component {
  constructor() {
    super();
    this.state = { projects: [] };
  }

  componentDidMount() {
    this.getStateFromStore();
  }

  getStateFromStore() {
    const user = this.props.params.user;
    this.setState({ projects: [], loading: true });
    return this.context.stores.projects.getUserProjects(user)
      .then(projects => this.setState({ projects, loading: false }))
      .catch(() => this.setState({ loading: false }));
  }

  render() {
    return (<BadgeTableLoader loadState={this.state} />);
  }
}

UserProjects.propTypes = {
  params: React.PropTypes.shape({
    user: React.PropTypes.string,
  }),
};
UserProjects.contextTypes = {
  stores: React.PropTypes.shape({
  }).isRequired,
};

