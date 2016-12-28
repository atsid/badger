const UserStore = require('./user_store');
const ProjectStore = require('./project_store');

const users = new UserStore();
const projects = new ProjectStore();

module.exports = {
  users,
  projects,
};
