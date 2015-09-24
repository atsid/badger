const React = require('react/addons');

const Login = React.createClass({
  getInitialState() {
    return {};
  },

  render() {
    return (<a href="/api/auth/github">Login with Github</a>);
  },
});

module.exports = Login;
