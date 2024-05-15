// @ts-nocheck
import { toast } from "react-toastify";
import { call, takeLatest } from "redux-saga/effects";
import Request from "./request";
import { contentTypes } from "./requestTypes";
import qs from "querystring";
import {
  createPromiseAction,
  rejectPromiseAction,
  resolvePromiseAction,
} from "@adobe/redux-saga-promise";
import { requestType } from "../redux/actionCreators";

const callApiMiddleware = (actionType: string) => {
  function* actionSaga() {
    yield takeLatest(createPromiseAction(actionType), actionAsync);
  }

  function* actionAsync(action) {
    const {
      url = "",
      params = {},
      method = requestType.POST,
      loginRequired = false,
      contentType = contentTypes.applicationJson,
      timeout = 0,
    } = action.payload;
    let data = action.payload.data;

    if (contentType === contentTypes.applicationFormUrlEncoded) {
      data = qs.stringify(action.payload.data);
    }

    try {
      const result = yield call(() => {
        return Request(
          url,
          params,
          method,
          data,
          loginRequired,
          contentType,
          timeout
        ).then((response) => response);
      });
      if (result && result.resultCode < 0) {
        yield call(rejectPromiseAction, action, result);
      } else {
        yield call(resolvePromiseAction, action, result);
      }
    } catch (error) {
      toast.error(error?.response?.message);
      console.log(error);
      yield call(rejectPromiseAction, action, error);
    }
  }

  return actionSaga;
};

export default callApiMiddleware;
