import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BadgeTable from './BadgeTable';
import { getRepos } from '../state/actions/projects';
import flatten from './flattenProjects';

class MyProjects extends React.Component {
  constructor() {
    super();
    this.state = { projects: [] };
  }

  componentDidMount() {
    this.props.onGetMyRepos();
  }

  render() {
    const { projects } = this.props;
    return (<BadgeTable projects={flatten(projects)} />);
  }
}
MyProjects.propTypes = {
  projects: React.PropTypes.object, // eslint-disable-line
  onGetMyRepos: React.PropTypes.func,
};

export default connect(
  state => ({
    projects: state.app.projects.allMyRepos,
  }),
  dispatch => bindActionCreators({
    onGetMyRepos: getRepos,
  }, dispatch),
)(MyProjects);
