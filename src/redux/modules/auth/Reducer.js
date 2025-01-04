import Types from "./Types";

const INIT_STATE = {
  accessToken: "",
  isLoading: {
    type: "",
    loading: false,
  },
};

export function authReducer(state = INIT_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case Types.AUTH_LOADING: {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case Types.LOGOUT: {
      return {
        ...state,
        accessToken: "",
      };
    }
    case Types.SET_ACCESS_TOKEN: {
      return {
        ...state,
        accessToken: payload,
      };
    }
    default: {
      return state;
    }
  }
}
