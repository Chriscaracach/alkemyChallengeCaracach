export const logoutUser = () => {
  return {
    type: "LOGOUT_USER",
  };
};
export const loginUser = () => {
  return {
    type: "LOGIN_USER",
  };
};
export const loginError = () => {
  return {
    type: "LOGIN_ERROR",
  };
};
export const loginErrorReset = () => {
  return {
    type: "LOGIN_ERROR_RESET",
  };
};
export const isLoading = () => {
  return {
    type: "IS_LOADING",
  };
};
export const isLoadingReset = () => {
  return {
    type: "RESET_LOADING",
  };
};
