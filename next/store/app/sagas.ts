import { all, fork } from "redux-saga/effects";
import callApiMiddleware from "../../utils/request/callApiMiddleware";
import actionTypes from "./actionTypes";
import { initSaga } from "../rootSaga";

export const testSaga = callApiMiddleware(actionTypes.TEST);

export default function* rootSaga() {
  yield all([fork(testSaga)]);
}
