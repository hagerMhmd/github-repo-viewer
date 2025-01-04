import Types from "./Types";

export const getAuthToken = (payload) => ({
  type: Types.GET_AUTH_TOKEN,
  payload,
});

export const authLoading = (payload) => ({
  type: Types.AUTH_LOADING,
  payload,
});

export const logout = (payload) => ({
  type: Types.LOGOUT,
  payload,
});

export const setAccessToken = (payload) => ({
  type: Types.SET_ACCESS_TOKEN,
  payload,
});
