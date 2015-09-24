const React = require('react/addons');
const Application = require('./components/Application');

window.onload = function onload() {
  // Facebook Authentication adds this value to the location hash
  if (window.location.hash.indexOf('_=_') > -1) {
    window.location.hash = '';
  }
  React.render(<Application />, document.body);
};
