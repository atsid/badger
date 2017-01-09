import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const log = require('debug')('app:components:Login');

const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`;

const Login = () => {
  const handleClick = () => {
    log('Fetching Github Code at url', GITHUB_AUTH_URL);
    window.open(GITHUB_AUTH_URL);
  };

  return (
    <FlatButton
      onClick={() => handleClick()}
      label="Login with Github"
    />
  );
};

export default Login;
