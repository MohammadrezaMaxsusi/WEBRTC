//@ts-nocheck
import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware, { END } from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";

import { isProduction } from "../utils/env/environment";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { promiseMiddleware } from "@adobe/redux-saga-promise";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = (initialState) => {
  // @ts-ignore
  const composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [promiseMiddleware, sagaMiddleware];

  if (!isProduction) {
    middlewares.push(logger);
  }

  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  // @ts-ignore
  store.runSaga = () => {
    // @ts-ignore
    if (store.saga) return;
    // @ts-ignore
    store.saga = sagaMiddleware.run(rootSaga);
  };

  // @ts-ignore
  store.stopSaga = async () => {
    // @ts-ignore
    if (!store.saga) return;
    store.dispatch(END);
    // @ts-ignore
    await store.saga.done;
    // @ts-ignore
    store.saga = null;
  };

  // @ts-ignore
  store.execSagaTasks = async (isServer, tasks) => {
    // @ts-ignore
    store.runSaga();
    // @ts-ignore
    tasks(store.dispatch);
    // @ts-ignore
    await store.stopSaga();
    if (!isServer) {
      // @ts-ignore
      store.runSaga();
    }
  };

  // @ts-ignore
  store.runSaga();
  // @ts-ignore
  store.__persistor = persistStore(store);
  return store;
};

const wrapper = createWrapper(makeStore);

export default wrapper;
