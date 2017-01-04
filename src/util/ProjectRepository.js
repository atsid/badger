import marked from 'marked';
import ghRead from './ghRead';
import strippy from './strippy';
import categorize from './categorize';
import scrape from './scrape';

const log = require('debug')('app:util:ProjectRepository');

function getReadme(token, name) {
  return ghRead(token, `/repos/${name}/readme`)
  .then(res => res.json())
  .then(json => new Buffer(json.content, 'base64').toString('utf-8'))
  .catch(() => '');
}

function transformRepository(token, repo) {
  const name = repo.full_name;
  const language = repo.language;
  const isPrivate = repo.private;
  return getReadme(token, name).then((readme) => {
    const badgeData = scrape(readme)
      .map(b => marked(b))
      .map(b => strippy(b))
      .map(b => categorize(b));

    const badges = {};
    badgeData.forEach(b => (badges[b.category] = b.content));
    return { name, private: isPrivate, badges, language };
  });
}

function transformRepositories(token, repositories) {
  return Promise.all(repositories.map(r => transformRepository(token, r)))
  .then((res) => {
    log('result repositories:', res);
    return res;
  });
}

/**
 * The project repository returns a list of projects available for viewing.
 */

export function getProjects(token, page = 0) {
  return ghRead(token, `/user/repos?page=${page}`)
  .then(res => res.json())
  .then(repos => transformRepositories(token, repos));
}

export function getProject(token, owner, repo) {
  return ghRead(token, `/repos/${owner}/${repo}`)
  .then(res => res.json())
  .then(repos => transformRepository(token, repos));
}

export function getProjectsByOrg(token, org, page = 0) {
  return ghRead(token, `/orgs/${org}/repos?page=${page}`)
  .then(res => res.json())
  .then(repos => transformRepositories(token, repos));
}

export function getProjectsByUser(token, owner, page) {
  return ghRead(token, `/users/${owner}/repos?page=${page}`)
  .then(res => res.json())
  .then(repos => transformRepositories(token, repos));
}
