import {
  GET_REPOS_ALL,
  GET_REPOS_ORG,
  GET_REPOS_USER,
  GET_REPO,
} from '../../actions/projects';

export default function reduce(state = {
  allMyRepos: {},
  personalRepos: {},
  reposByOwnerAndName: {},
  reposByOrg: {},
  reposByUser: {},
}, action) {
  if (action.type === GET_REPOS_ALL) {
    const { page, repositories } = action.payload;
    return {
      ...state,
      allMyRepos: {
        ...state.allMyRepos,
        [page]: repositories,
      },
    };
  } else if (action.type === GET_REPOS_ORG) {
    const { org, page, repositories } = action.payload;
    return {
      ...state,
      reposByOrg: {
        ...state.reposByOrg,
        [org]: {
          ...state.reposByOrg[org],
          [page]: repositories,
        },
      },
    };
  } else if (action.type === GET_REPOS_USER) {
    const { user, page, repositories } = action.payload;
    return {
      ...state,
      reposByUser: {
        ...state.reposByUser,
        [user]: {
          ...state.reposByUser[user],
          [page]: repositories,
        },
      },
    };
  } else if (action.type === GET_REPO) {
    const { user, name, repository } = action.payload;
    return {
      ...state,
      reposByOwnerAndName: {
        ...state.reposByOwnerAndName,
        [user]: {
          ...state.reposByOwnerAndName[user],
          [name]: repository,
        },
      },
    };
  }
  return state;
}
