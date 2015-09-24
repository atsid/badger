const React = require('react/addons');

// Components
const mui = require('material-ui');
const Card = mui.Card;
const CardHeader = mui.CardHeader;
const CardText = mui.CardText;

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
    const privateIndicator = (project.private && 'Private') || 'Public';
    const badges = [];
    if (project.badges) {
      let index = 0;
      project.badges.forEach((b) => badges.push(
        <span key={index++} className="projectBadge" dangerouslySetInnerHTML={{__html: b}}></span>
      ));
    }
    return (
      <Card>
        <CardHeader title={project.name} subtitle={privateIndicator} />

        <CardText>
          { badges }
        </CardText>
      </Card>
    );
  },
});

module.exports = Project;
