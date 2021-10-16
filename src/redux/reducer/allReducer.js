import { searchReducer, teamReducer } from "./reducer";
import { combineReducers } from "redux";

//Aquí se combinan los reducers de Redux

const allReducer = combineReducers({
  searchReducer: searchReducer,
  teamReducer: teamReducer,
});

export default allReducer;
