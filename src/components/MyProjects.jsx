import React from 'react';
import BadgeTableLoader from './BadgeTableLoader';

export default class MyProjects extends React.Component {
  constructor() {
    super();
    this.state = { projects: [] };
  }

  componentDidMount() {
    this.getStateFromStore();
  }

  getStateFromStore() {
    this.setState({ projects: [], loading: true });
    return this.context.stores.projects.getMyProjects()
      .then(projects => this.setState({ projects, loading: false }))
      .catch(() => this.setState({ loading: false }));
  }

  render() {
    return (<BadgeTableLoader loadState={this.state} />);
  }
}

MyProjects.contextTypes = {
  stores: React.PropTypes.object.isRequired,
};
