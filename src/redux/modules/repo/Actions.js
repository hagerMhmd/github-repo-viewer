import Types from "./Types";

export const setRepos = (payload) => ({
  type: Types.SET_REPOS,
  payload,
});

export const setReposLoading = (payload) => ({
  type: Types.REPOS_LOADING,
  payload,
});

export const setError = (error) => ({
  type: Types.SET_ERROR,
  payload: error,
});
export const resetReposData = (payload) => ({
  type: Types.RESET_REPOS_DATA,
  payload,
});
