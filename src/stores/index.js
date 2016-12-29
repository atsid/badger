import projects from './project_store';
import UserStore from './user_store';

const users = new UserStore();

module.exports = {
  users,
  projects,
};
