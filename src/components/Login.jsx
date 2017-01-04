import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`;

const Login = () => {
  const handleClick = () => {
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
