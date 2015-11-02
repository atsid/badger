const React = require('react');
const ReactDOM = require('react-dom');
const Application = require('./components/Application');

window.onload = function onload() {
  // Facebook Authentication adds this value to the location hash
  if (window.location.hash.indexOf('_=_') > -1) {
    window.location.hash = '';
  }
  ReactDOM.render(<Application />, document.body);
};
