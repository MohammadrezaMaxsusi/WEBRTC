// @ts-nocheck
import { createPromiseAction } from "@adobe/redux-saga-promise";

interface asyncActionType {
  TRIGGER: string;
  RESOLVED: string;
  REJECTED: string;
}

const asyncActionTypeCreator = (actionType: string): string[] => [
  `${actionType}.TRIGGER`,
  `${actionType}.RESOLVED`,
  `${actionType}.REJECTED`,
];

const getAsyncActionType = (actionType: string): asyncActionType => {
  return {
    TRIGGER: `${actionType}.TRIGGER`,
    RESOLVED: `${actionType}.RESOLVED`,
    REJECTED: `${actionType}.REJECTED`,
  };
};

const requestType = {
  GET: "get",
  POST: "post",
  DELETE: "delete",
  UPDATE: "update",
  PUT: "put",
};

const makeActionCreator = (type: string, ...argNames: any) => {
  return function (...args) {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
};

const makeAsyncActionCreator = (data) => createPromiseAction(data.type)(data);

export {
  asyncActionTypeCreator,
  makeActionCreator,
  requestType,
  makeAsyncActionCreator,
  getAsyncActionType,
};
