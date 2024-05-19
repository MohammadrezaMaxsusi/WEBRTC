import { combineReducers } from "redux";
import appReducers from "./app/reducers";
import authReducers from "./auth/reducers";

const rootReducers = combineReducers({
  app: appReducers,
  auth: authReducers,
});

export default rootReducers;
