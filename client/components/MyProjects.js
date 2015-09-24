const debug = require('debug')('app:components:my_project');
const React = require('react/addons');

// Components
const mui = require('material-ui');
const CircularProgress = mui.CircularProgress;

const BadgeTable = require('./BadgeTable');

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
      .catch((err) => {
        debug('error loading store data', err);
        this.setState({loading: false});
      });
  },

  render() {
    let result = null;
    const projects = this.state.projects;
    if (this.state.loading) {
      result = (<CircularProgress mode="indeterminate" size={2} />);
    } else if (projects.length > 0) {
      result = (<BadgeTable projects={projects} />);
    } else {
      result = (<h1>No Projects Found!</h1>);
    }
    return result;
  },
});

module.exports = MyProjects;
