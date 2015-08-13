const GitHubApi = require('github');
const Bluebird = require('bluebird');
const debug = require('debug')('app:components:github');
const Config = require('config');

const ORG = Config.github.org;
const TOKEN = Config.github.token;
const ACCEPT_HEADER = Config.github.acceptHeader;
const USER_AGENT = Config.github.userAgent;

const github = new GitHubApi({
    version: '3.0.0',
    protocol: 'https',
    host: 'api.github.com',
    timeout: 10000,
    headers: {
        'user-agent': USER_AGENT,
    },
});

if (TOKEN) {
    github.authenticate({
        type: 'oauth',
        token: TOKEN,
    });
    debug('Github authentication method: Token');
} else {
    debug('No Github Token found. App will be unable to authenticate.');
}

if (ACCEPT_HEADER) {
    github.config.headers.Accept = ACCEPT_HEADER;
}

/**
 * Emit an object with Promisified Github methods and a raw, configured github API object.
 * @type {{github: *, getMembers}}
 */
module.exports = {
    github: github,
    config: {
        org: ORG,
    },
    isOrgMember: Bluebird.promisify(github.orgs.getMember),
    getUsers: Bluebird.promisify(github.orgs.getMembers),
    getUser: Bluebird.promisify(github.user.getFrom),
    getRepos: Bluebird.promisify(github.repos.getFromOrg),
    getReadme: Bluebird.promisify(github.repos.getReadme),
    isCollaborator: Bluebird.promisify(github.repos.getCollaborator),
    addCollaborator: Bluebird.promisify(github.repos.addCollaborator),
    removeCollaborator: Bluebird.promisify(github.repos.removeCollaborator),
    getTeam: Bluebird.promisify(github.orgs.getTeam),
    getCollaborators: Bluebird.promisify(github.repos.getCollaborators),
    getTeams: Bluebird.promisify(github.orgs.getTeams),
    createTeam: Bluebird.promisify(github.orgs.createTeam),
    getTeamMembers: Bluebird.promisify(github.orgs.getTeamMembers),
    getTeamRepos: Bluebird.promisify(github.orgs.getTeamRepos),
    addTeamMember: Bluebird.promisify(github.orgs.addTeamMember),
    deleteTeamMember: Bluebird.promisify(github.orgs.deleteTeamMember),
};
