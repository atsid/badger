const debug = require('debug')('app:components:my_project');
const React = require('react/addons');
const Project = require('./Project');

// Stores
const stores = require('../stores');
const projectStore = stores.projectStore;

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

    if (this.state.loading) {
      result = (
        <div>Loading...</div>
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
