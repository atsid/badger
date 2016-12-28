const React = require('react');

// Components
const BadgeTableLoader = require('./BadgeTableLoader');

const UserProjects = React.createClass({
  propTypes: {
    params: React.PropTypes.object,
  },
  contextTypes: {
    stores: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    return {projects: []};
  },

  componentDidMount() {
    this.getStateFromStore();
  },

  getStateFromStore() {
    const user = this.props.params.user;
    this.setState({projects: [], loading: true});
    return this.context.stores.projects.getUserProjects(user)
      .then((projects) => {
        this.setState({projects: projects, loading: false});
      })
      .catch(() => {
        this.setState({loading: false});
      });
  },

  render() {
    return (<BadgeTableLoader loadState={this.state} />);
  },
});

module.exports = UserProjects;
