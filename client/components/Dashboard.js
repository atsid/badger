const React = require('react/addons');
const userStore = require('../stores').userStore;
const MyProjects = require('./MyProjects');
const Login = require('./Login');

const Dashboard = React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
    return this.getStateFromStore();
  },

  getStateFromStore() {
    this.setState({loading: true});
    userStore.getCurrentUser()
      .then((user) => this.setState({user, loading: false}))
      .catch(() => this.setState({loading: false}));
  },

  render() {
    let result = null;
    if (this.state.user) {
      result = (<MyProjects />);
    } else {
      result = (<Login />);
    }
    return result;
  },
});

module.exports = Dashboard;
