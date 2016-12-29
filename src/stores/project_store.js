const request = require('superagent-bluebird-promise');

function getReposFromUrl(url) {
  return request.get(`${process.env.API_URL}/${url}`)
    .then(res => res.body);
}

/**
 * A data store for Projects
 */
export function getMyProjects() {
  return getReposFromUrl('repos/mine');
}

export function getOrgProjects(org) {
  return getReposFromUrl(`repos/orgs/${org}`);
}

export function getUserProjects(user) {
  return getReposFromUrl(`repos/users/${user}`);
}
