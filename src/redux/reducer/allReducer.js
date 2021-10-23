import { heroReducer } from "./reducer";
import { combineReducers } from "redux";

//Aquí se combinan los reducers de Redux

const allReducer = combineReducers({
  heroReducer: heroReducer,
});

export default allReducer;
