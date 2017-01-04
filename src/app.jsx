import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Application from './components/Application';
import store from './state';
import { receiveToken } from './state/actions/auth';

const GH_GATEKEEPER_URL = 'https://8rmgiduz8f.execute-api.us-west-2.amazonaws.com/prod/authenticate';

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

/**
 * Render the Application
 */
window.onload = function onload() {
  const githubCodeMatch = window.location.href.match(/\?code=(.*)/);
  const githubCode = githubCodeMatch && githubCodeMatch[1];
  ReactDOM.render(<Application authCode={githubCode} />, document.getElementById('badger'));
};

/**
 * OAuth Flow Handlers
 */
function fetchUserToken(code) {
  const body = JSON.stringify({ code });
  return fetch(GH_GATEKEEPER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })
  .then((res) => {
    if (!res.ok) {
      return res.text().then((text) => {
        throw new Error(text);
      });
    }
    return res.json();
  })
  .then(res => res.token);
}

window.addEventListener('message', (event) => {
  const code = event.data;
  if (code && typeof code === 'string') {
    fetchUserToken(code).then((token) => {
      localStorage.access_token = token;
      store.dispatch(receiveToken(token));
    });
  }
});

if (localStorage.access_token) {
  store.dispatch(receiveToken(localStorage.access_token));
}
