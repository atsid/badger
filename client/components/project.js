const React = require('react');

const Project = React.createClass({
  propTypes: {
    project: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    return {
      project: this.props.project,
    };
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      project: nextProps.project,
    });
    this.render();
  },

  render() {
    const project = this.state.project || {};
    const privateIndicator = (project.private && 'Private') || 'Public';
    const badges = [];
    if (project.badges) {
      project.badges.forEach((b) => badges.push(
        <span className="projectBadge" dangerouslySetInnerHTML={{__html: b}}></span>
      ));
    }

    return (
      <div>
        <div className="projectTitleLine">
          <h2 className="projectName">
            { project.name }
          </h2>
          <h4 className="projectPrivacy">
            { privateIndicator }
          </h4>
        </div>
        <div className="projectBadges">
          { badges }
        </div>
      </div>
    );
  },
});

module.exports = Project;
