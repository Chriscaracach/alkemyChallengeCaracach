const initialState = {
  userLogged: false,
  loginError: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        userLogged: true,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        userLogged: false,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        loginError: true,
      };
    case "LOGIN_ERROR_RESET":
      return {
        ...state,
        loginError: false,
      };
    default:
      return state;
  }
};
