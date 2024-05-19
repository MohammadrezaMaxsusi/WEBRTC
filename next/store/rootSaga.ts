import { all, fork } from "redux-saga/effects";
import appSaga from "./app/sagas";
import authSaga from "./auth/sagas";

// eslint-disable-next-line require-yield
export function* initSaga() {
  return { hello: "hello" };
}

export default function* rootSaga() {
  try {
    yield all([
      fork(initSaga),
      fork(authSaga),
      fork(appSaga),
    ]);
  } catch (err) {
    console.log(err);
  }
}
