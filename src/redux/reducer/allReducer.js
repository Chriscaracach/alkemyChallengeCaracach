import { heroReducer } from "./reducer";
import { loginReducer } from "./loginReducer";
import { combineReducers } from "redux";

//Aquí se combinan los reducers de Redux

const allReducer = combineReducers({
  heroReducer: heroReducer,
  loginReducer: loginReducer,
});

export default allReducer;
