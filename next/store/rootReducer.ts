import { combineReducers } from "redux";
import appReducers from "./app/reducers";

const rootReducers = combineReducers({
  app: appReducers,
});

export default rootReducers;
