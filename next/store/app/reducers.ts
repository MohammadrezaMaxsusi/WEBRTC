//@ts-nocheck

import { combineReducers } from "redux";
import actionTypes from "./actionTypes";
import _ from "lodash";
import { getAsyncActionType } from "@/utils/redux/actionCreators";

const testSync = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.TEST_SYNC:
      return _.get(action, "data", {});
    default:
      return state;
  }
};

const test = (state = {}, action) => {
  switch (action.type) {
    case getAsyncActionType(actionTypes.TEST).RESOLVED:
      return _.get(action, "payload", {});
    default:
      return state;
  }
};

const reducers = combineReducers({
  test,
  testSync,
});

export default reducers;
