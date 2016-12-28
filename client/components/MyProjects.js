const React = require('react');

// Components
const BadgeTableLoader = require('./BadgeTableLoader');

const MyProjects = React.createClass({
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
    this.setState({projects: [], loading: true});
    return this.context.stores.projects.getMyProjects()
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

module.exports = MyProjects;
