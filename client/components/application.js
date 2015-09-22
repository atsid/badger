const React = require('react');
const Project = require('./project');

const ProjectStore = require('../stores/project_store');
const projectStore = new ProjectStore();

const debug = require('debug')('app:components:application');

const Application = React.createClass({
  getInitialState() {
    return {
      loading: true,
      projects: [],
    };
  },

  componentDidMount() {
    this.getStateFromStore({});
  },

  getStateFromStore() {
    this.setState({projects: [], loading: true});

    return projectStore.getProjects()
      .then((projects) => {
        this.setState({projects, loading: false});
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
        projects.push(<Project key={p.name} project={p}/>);
      });
    }
    return (
      <div>
        <div>
          <h1>Login</h1>
          <a href="/api/auth/github">Login with Github</a>
        </div>
        <div>
          <h1>Projects</h1>
          <div>{ projects }</div>
        </div>
      </div>
    );
  },
});

module.exports = Application;
