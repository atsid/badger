const Promise = require('bluebird');

/**
 * The project repository returns a list of projects available for viewing.
 */
class ProjectRepository {
    constructor(github, badgeScraper) {
        this.github = github;
        this.badgeScraper = badgeScraper;
    }

    getProjects() {
        return this.github.getRepos({
            org: this.github.config.org,
            per_page: 100,
        }).then((repos) => Promise.all(repos.map(this._getProjectInfoFromRepository.bind(this))));
    }

    _getProjectInfoFromRepository(repo) {
        const name = repo.full_name;
        const isPrivate = repo.private;
        return this._getReadme.apply(this, [name]).then((readme) => {
            return {
                name,
                'private': isPrivate,
                badges: this.badgeScraper.scrape(readme),
            };
        });
    }

    _getReadme(repoName) {
        const repoTokens = repoName.split('/');
        const user = repoTokens[0];
        const repo = repoTokens[1];
        return this.github.getReadme({user, repo})
        .then((readme) => new Buffer(readme.content, 'base64').toString('utf8'));
    }
}

module.exports = ProjectRepository;
