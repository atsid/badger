import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const Login = () => {
  const handleClick = () => {
    console.log('CLICK!');
  };
  return (
    <FlatButton
      onClick={() => handleClick()}
      label="Login with Github"
    />
  );
};

export default Login;
