import {
    RECEIVE_TOKEN,
    LOGOUT,
} from '../../actions/auth';

export default function reduce(state = { token: null }, action) {
  if (action.type === RECEIVE_TOKEN) {
    return { ...state, token: action.payload };
  } else if (action.type === LOGOUT) {
    return { ...state, token: null };
  }
  return state;
}
