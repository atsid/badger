const debug = require('debug')('app:components:my_project');
const React = require('react');

// Components
const BadgeTableLoader = require('./BadgeTableLoader');

const OrgProjects = React.createClass({
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
    const org = this.props.params.org;
    this.setState({projects: [], loading: true});
    return this.context.stores.projects.getOrgProjects(org)
      .then((projects) => {
        this.setState({projects: projects, loading: false});
      })
      .catch((err) => {
        debug('error loading store data', err);
        this.setState({loading: false});
      });
  },

  render() {
    return (<BadgeTableLoader loadState={this.state} />);
  },
});

module.exports = OrgProjects;
