import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import BadgeTable from './BadgeTable';

const BadgeTableLoader = ({ loadState: state }) => {
  let result = null;
  if (state.loading) {
    result = (<CircularProgress mode="indeterminate" size={2} />);
  } else if (state.projects.length > 0) {
    result = (<BadgeTable projects={state.projects} />);
  } else {
    result = (<h1>No Projects Found!</h1>);
  }
  return result;
};
BadgeTableLoader.propTypes = {
  loadState: React.PropTypes.shape({
    loading: React.PropTypes.bool,
    projects: React.PropTypes.arrayOf(
      React.PropTypes.shape(),
    ),
  }).isRequired,
};
export default BadgeTableLoader;
