import { all, fork } from "redux-saga/effects";
import appSaga from "./app/sagas";

// eslint-disable-next-line require-yield
export function* initSaga() {
  return { hello: "hello" };
}

export default function* rootSaga() {
  try {
    yield all([
      fork(initSaga),
      fork(appSaga),
    ]);
  } catch (err) {
    console.log(err);
  }
}
