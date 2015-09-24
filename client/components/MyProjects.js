const debug = require('debug')('app:components:my_project');
const React = require('react/addons');

// Stores
const stores = require('../stores');
const projectStore = stores.projectStore;

// Components
const mui = require('material-ui');
const RefreshIndicator = mui.RefreshIndicator;
const Project = require('./Project');

const MyProjects = React.createClass({
  getInitialState() {
    return {projects: []};
  },

  componentDidMount() {
    this.getStateFromStore();
  },

  getStateFromStore() {
    this.setState({projects: [], loading: true});
    return projectStore.getMyProjects()
      .then((projects) => {
        this.setState({projects: projects, loading: false});
      })
      .catch((err) => {
        debug('error loading store data', err);
        this.setState({loading: false});
      });
  },

  render() {
    const projects = [];
    if (this.state.projects) {
      this.state.projects.forEach((p) => {
        projects.push(
          <Project key={p.name} project={p}/>
        );
      });
    }

    let result = null;
    if (this.state.loading) {
      result = (
        <RefreshIndicator size={40} left={80} top={80} status="loading" />
      );
    } else if (projects.length > 0) {
      result = (
        <div>
          <div>{ projects }</div>
        </div>
      );
    } else {
      result = (
        <h1>No Projects Found!</h1>
      );
    }

    return result;
  },
});

module.exports = MyProjects;
