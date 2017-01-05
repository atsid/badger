import { createAction } from 'redux-actions';
import * as Source from '../../util/ProjectRepository';

export const GET_REPOS_ALL = 'GET_REPOS_ALL';
export const GET_REPOS_ORG = 'GET_REPOS_ORG';
export const GET_REPOS_USER = 'GET_REPOS_USER';
export const GET_REPO = 'GET_REPO';

const doGetRepos = createAction(GET_REPOS_ALL);
const doGetReposOrg = createAction(GET_REPOS_ORG);
const doGetReposUser = createAction(GET_REPOS_USER);
const doGetRepo = createAction(GET_REPO);

const token = () => localStorage.access_token;

export const getRepos = (page = 0) => (
  dispatch => (
    Source.getProjects(token(), page)
    .then((repositories) => {
      dispatch(doGetRepos({ page, repositories }));
    })
  )
);

export const getOrgRepos = (org, page = 0) => (
  dispatch => (
    Source.getProjectsByOrg(token(), org, page)
    .then((repositories) => {
      dispatch(doGetReposOrg({ org, page, repositories }));
    })
  )
);

export const getUserRepos = (user, page = 0) => (
  dispatch => (
    Source.getProjectsByUser(token(), user, page)
    .then((repositories) => {
      dispatch(doGetReposUser({ user, page, repositories }));
    })
  )
);

export const getReposByUserAndName = (user, name) => (
  dispatch => (
    Source.getReposByUserAndName(user, name)
    .then((repository) => {
      dispatch(doGetRepo({ user, name, repository }));
    })
  )
);
