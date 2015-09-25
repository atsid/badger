const React = require('react/addons');

// Components
const mui = require('material-ui');
const CircularProgress = mui.CircularProgress;
const BadgeTable = require('./BadgeTable');

const BadgeTableLoader = React.createClass({
  propTypes: {
    loadState: React.PropTypes.object.isRequired,
  },

  render() {
    let result = null;
    const state = this.props.loadState;
    if (state.loading) {
      result = (<CircularProgress mode="indeterminate" size={2} />);
    } else if (state.projects.length > 0) {
      result = (<BadgeTable projects={state.projects} />);
    } else {
      result = (<h1>No Projects Found!</h1>);
    }
    return result;
  },
});

module.exports = BadgeTableLoader;
