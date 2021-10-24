const initialState = {
  userLogged: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        userLogged: true,
      };
    case "LOGOUT_USER":
      return {
        userLogged: false,
      };
    default:
      return state;
  }
};
