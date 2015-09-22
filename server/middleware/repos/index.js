const ProjectRepository = require('app/components/project_repository');
const BadgeScraper = require('app/components/repo_badge_scraper');
const badgeScraper = new BadgeScraper();

const projectRepo = new ProjectRepository(badgeScraper);

module.exports = {
  getIndex: require('./get_index'),
  getReposByOrg: require('./get_repos_by_org')(projectRepo),
  getReposByUser: require('./get_repos_by_user')(projectRepo),
  getRepoByName: require('./get_repo_by_name')(projectRepo),
  getMyRepos: require('./get_my_repos')(projectRepo),
};
