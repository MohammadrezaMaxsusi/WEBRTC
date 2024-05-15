// @ts-nocheck
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const persist = (key, reducer) =>
  persistReducer({ key, storage }, reducer);

export const getPersistItem = (key) => {
  if (
    typeof window !== "undefined" &&
    localStorage.getItem(`persist:${key}`) !== null
  ) {
    return JSON.parse(localStorage.getItem(`persist:${key}`));
  }
  return null;
};

export const removePersistItem = (key) => {
  if (
    typeof window !== "undefined" &&
    localStorage.getItem(`persist:${key}`) !== null
  ) {
    return localStorage.removeItem(`persist:${key}`);
  }
  return null;
};
