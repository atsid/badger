import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BadgeTable from './BadgeTable';
import { getUserRepos } from '../state/actions/projects';
import flatten from './flattenProjects';

class OrgProjects extends React.Component {
  constructor() {
    super();
    this.state = { projects: [] };
  }

  componentDidMount() {
    const user = this.props.params.user;
    this.props.onGetUserRepos(user);
  }

  render() {
    const { projects } = this.props;
    const org = this.props.params.org;
    return (<BadgeTable projects={flatten(projects[org])} />);
  }
}
OrgProjects.propTypes = {
  projects: React.PropTypes.object, // eslint-disable-line
  onGetUserRepos: React.PropTypes.func,
  params: React.PropTypes.object, // eslint-disable-line
};

export default connect(
  state => ({
    projects: state.app.projects.reposByOrg,
  }),
  dispatch => bindActionCreators({
    ongGtUserRepos: getUserRepos,
  }, dispatch),
)(OrgProjects);
