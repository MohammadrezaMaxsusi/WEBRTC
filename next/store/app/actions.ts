// @ts-nocheck
import {
  makeActionCreator,
  makeAsyncActionCreator,
  requestType,
} from "../../utils/redux/actionCreators";
import actionTypes from "./actionTypes";
import Urls from "../../utils/api/urls";
import { contentTypes } from "../../utils/request/requestTypes";

export const setErrorResultCode = makeActionCreator(
  actionTypes.TEST_SYNC,
  "data"
);

export const test = () => {
  return makeAsyncActionCreator({
    type: actionTypes.TEST,
    data: { salam: "salam" },
    url: Urls.test,
    method: requestType.POST,
  });
};
