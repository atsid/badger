const Promise = require('bluebird');
const marked = require('marked');
const github = require('./github');

/**
 * The project repository returns a list of projects available for viewing.
 */
class ProjectRepository {
    constructor(badgeScraper) {
        this.badgeScraper = badgeScraper;

        this._transformRepository = this._transformRepository.bind(this);
        this._transformRepositories = this._transformRepositories.bind(this);
        this._getReadme = this._getReadme.bind(this);
    }

    getProjects(user) {
        const client = github.createClient(user);
        return client.repos.getReposAsync({
            org: this.github.config.org,
            per_page: 100,
        })
            .then((repos) => this._transformRepositories(client, repos));
    }

    getProject(user, owner, repo) {
        const client = github.createClient(user);
        return client.repos.getAsync({user: owner, repo})
            .then((r) => this._transformRepository(client, r));
    }

    getProjectsByOrg(user, org) {
        const client = github.createClient(user);
        return client.repos.getFromOrgAsync({org})
            .then((repos) => this._transformRepositories(client, repos));
    }

    getProjectsByUser(user, owner) {
        const client = github.createClient(user);
        return client.repos.getFromUserAsync({user: owner})
            .then((repos) => this._transformRepositories(client, repos));
    }

    getMyRepos(user) {
        if (!user) {
            return [];
        }
        const client = github.createClient(user);
        return client.repos.getAllAsync({per_page: 100})
            .then((repos) => this._transformRepositories(client, repos));
    }

    _transformRepositories(client, repositories) {
        return Promise.all(repositories.map((r) => this._transformRepository(client, r)));
    }

    _transformRepository(client, repo) {
        const name = repo.full_name;
        const isPrivate = repo.private;
        return this._getReadme.apply(this, [client, name]).then((readme) => {
            const badges = this.badgeScraper.scrape(readme).map((b) => marked(b));
            return {name, 'private': isPrivate, badges};
        });
    }

    _getReadme(client, repoName) {
        const repoTokens = repoName.split('/');
        const user = repoTokens[0];
        const repo = repoTokens[1];
        return new Promise((resolve) => {
            client.repos.getReadme({user, repo}, (err, res) => {
                if (err) {
                    resolve('');
                } else {
                    resolve(new Buffer(res.content, 'base64').toString('utf8'));
                }
            });
        });
    }
}

module.exports = ProjectRepository;
