import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const log = require('debug')('app:components:Login');

const Login = () => {
  const handleClick = () => {
    log('TODO: Handle Login Click');
  };
  return (
    <FlatButton
      onClick={() => handleClick()}
      label="Login with Github"
    />
  );
};

export default Login;
