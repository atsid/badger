import { createAction } from 'redux-actions';

export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';
export const LOGOUT = 'LOGOUT';

export const receiveToken = createAction(RECEIVE_TOKEN);

const doLogout = createAction(LOGOUT);

export function logout() {
  return (dispatch) => {
    delete localStorage.access_token;
    dispatch(doLogout());
  };
}
