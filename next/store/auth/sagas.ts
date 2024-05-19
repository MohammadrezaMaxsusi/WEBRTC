import { all, fork } from "redux-saga/effects";
import callApiMiddleware from "../../utils/request/callApiMiddleware";
import actionTypes from "./actionTypes";
import { initSaga } from "../rootSaga";

export const loginSaga = callApiMiddleware(actionTypes.LOGIN);

export default function* rootSaga() {
  yield all([fork(loginSaga)]);
}
