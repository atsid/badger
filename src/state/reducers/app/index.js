import { combineReducers } from 'redux';
import auth from './auth';
import drawer from './drawer';
import projects from './projects';

export default combineReducers({
  auth,
  drawer,
  projects,
});
