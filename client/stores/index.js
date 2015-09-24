const UserStore = require('./user_store');
const ProjectStore = require('./project_store');

const userStore = new UserStore();
const projectStore = new ProjectStore();

module.exports = {
  userStore,
  projectStore,
};
