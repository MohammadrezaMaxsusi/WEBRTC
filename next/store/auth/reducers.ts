//@ts-nocheck

import { combineReducers } from "redux";
import actionTypes from "./actionTypes";
import _ from "lodash";
import { getAsyncActionType } from "@/utils/redux/actionCreators";

const login = (state = {}, action) => {
  switch (action.type) {
    case getAsyncActionType(actionTypes.LOGIN).RESOLVED:
      return _.get(action, "payload", {});
    default:
      return state;
  }
};

const reducers = combineReducers({
  login,
});

export default reducers;
