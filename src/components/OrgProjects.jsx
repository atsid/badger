import React from 'react';
import BadgeTableLoader from './BadgeTableLoader';

export default class OrgProjects extends React.Component {
  constructor() {
    super();
    this.state = { projects: [] };
  }

  componentDidMount() {
    this.getStateFromStore();
  }

  getStateFromStore() {
    const org = this.props.params.org;
    this.setState({ projects: [], loading: true });
    return this.context.stores.projects.getOrgProjects(org)
      .then(projects => this.setState({ projects, loading: false }))
      .catch(() => this.setState({ loading: false }));
  }

  render() {
    return (<BadgeTableLoader loadState={this.state} />);
  }
}

OrgProjects.propTypes = {
  params: React.PropTypes.shape({
    org: React.PropTypes.string,
  }),
};
OrgProjects.contextTypes = {
  stores: React.PropTypes.object.isRequired,
};
