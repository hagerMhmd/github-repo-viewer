import Types from "./Types";

const INIT_STATE = {
  reposList: [],
  numberOfPages: 0,
  reposLength: 0,
  isLoading: {
    type: "",
    loading: false,
  },
  error: null,
};

export function reposReducer(state = INIT_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case Types.SET_REPOS: {
      return {
        ...state,
        reposList: payload?.data,
        numberOfPages: payload?.numberOfPages,
        reposLength: payload?.data.length,
      };
    }
    case Types.REPOS_LOADING: {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case Types.SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    case Types.RESET_REPOS_DATA: {
      return {
        reposList: [],
        numberOfPages: 0,
        reposLength: 0,
        isLoading: {
          type: "",
          loading: false,
        },
        error: null,
      };
    }
    default: {
      return state;
    }
  }
}
