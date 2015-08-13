const ProjectRepository = require('app/components/project_repository');
const BadgeScraper = require('app/components/repo_badge_scraper');
const github = require('app/components/github');
const badgeScraper = new BadgeScraper();

const projectRepo = new ProjectRepository(github, badgeScraper);

module.exports = {
    getProjects: require('./get_projects')(projectRepo),
};
