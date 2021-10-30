import {
  LOGIN_USER,
  LOGIN_ERROR,
  LOGIN_ERROR_RESET,
  LOGOUT_USER,
  IS_LOADING,
  RESET_LOADING,
} from "../../constants/constants";

const initialState = {
  userLogged: false,
  loginError: false,
  isLoading: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        userLogged: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        userLogged: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: true,
      };
    case LOGIN_ERROR_RESET:
      return {
        ...state,
        loginError: false,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case RESET_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
