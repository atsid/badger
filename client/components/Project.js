const React = require('react/addons');

// Components
const mui = require('material-ui');
const Paper = mui.Paper;

const Project = React.createClass({
  propTypes: {
    project: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    return {project: this.props.project};
  },

  componentWillReceiveProps(nextProps) {
    this.setState({project: nextProps.project});
  },

  render() {
    const project = this.state.project || {};
    const privacyIndicator = (project.private && (<b> [priv]</b>)) || '';
    const badges = [];
    if (project.badges) {
      let index = 0;
      project.badges.forEach((b) => badges.push(
        <div className="projectBadge" key={index++} dangerouslySetInnerHTML={{__html: b}} />
      ));
    }
    return (
      <Paper className="projectView">
        <div className="badgeBlock projectName">{project.name}{privacyIndicator}</div>
        <div className="badgeBlock">{badges}</div>
      </Paper>
    );
  },
});

module.exports = Project;
