const React = require('react/addons');
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
        this.setState({data: null, loading: true});
        projectStore.getProjects()
        .then((projects) => {
            this.setState({projects, loading: false});
        }).catch((err) => {
            debug('error loading store data', err);
            this.setState({loading: false});
        });
    },

    render() {
        const projects = [];
        if (this.state.projects) {
            this.state.projects.forEach((project) => {
                projects.push(<Project key={project.name} project={project}/>);
            });
        }
        return (
            <div>
                <h1>Projects</h1>
                <div>{ projects }</div>
            </div>
        );
    },
});

module.exports = Application;
