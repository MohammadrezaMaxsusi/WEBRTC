// @ts-nocheck
import {
  makeActionCreator,
  makeAsyncActionCreator,
  requestType,
} from "../../utils/redux/actionCreators";
import actionTypes from "./actionTypes";
import Urls from "../../utils/api/urls";


export const login = (data) => {
  return makeAsyncActionCreator({
    type: actionTypes.LOGIN,
    data,
    url: Urls.baseLocalURL + Urls.login,
    method: requestType.POST,
  })
}
