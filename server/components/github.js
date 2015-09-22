const GitHubApi = require('github');
const Bluebird = require('bluebird');
const Config = require('config');

const ACCEPT_HEADER = Config.github.acceptHeader;
const USER_AGENT = Config.github.userAgent;

function createClient(user) {
  const client = new GitHubApi({
    version: '3.0.0',
    protocol: 'https',
    host: 'api.github.com',
    timeout: 10000,
    headers: {
      'user-agent': USER_AGENT,
      'Accept': ACCEPT_HEADER,
    },
  });

  if (user && user.githubToken) {
    client.authenticate({
      type: 'oauth',
      token: user.githubToken,
    });
  }

  Bluebird.promisifyAll(client.repos);
  Bluebird.promisifyAll(client.orgs);

  return client;
}

/**
 * Emit an object with Promisified Github methods and a raw, configured github API object.
 * @type {{github: *, getMembers}}
 */
module.exports = {createClient};
