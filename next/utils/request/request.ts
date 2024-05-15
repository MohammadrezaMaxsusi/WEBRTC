// @ts-nocheck
import axios from "axios";

import Urls from "../api/urls";
import get from "lodash/get";
import LocalStorage, { tokenType } from "../storage/localStorage";
import { isProduction } from "../env/environment";

const Request = (
  url: string,
  params: any,
  method: any,
  data: any,
  loginRequired: boolean,
  contentType: string,
  timeout: number
) => {
  const baseURL = isProduction ? Urls.baseProductionURL : Urls.baseLocalURL;

  let headers = {
    "Content-Type": `${contentType};charset=utf-8`,
  };

  if (loginRequired) {
    const token = LocalStorage.getItem(tokenType.AUTH);
    //@ts-ignore
    headers = { ...headers, Authorization: `bearer ${token}` };
  }

  const request = {
    url,
    method,
    baseURL,
    headers,
    params,
    data,
    timeout,
  };

  const instance = axios.create({ timeout: timeout || 30000 });

  return instance(request)
    .then((response) => {
      if (get(response, "status")) {
        if (
          get(response, "status") >= 300 ||
          get(response, "data.responseHeader.status") >= 300
        ) {
          return Promise.reject({ response });
        }
      } else if (!response.data.scope) {
        return Promise.reject({ response });
      }

      return response.data;
    })
    .catch((error) => {
      console.log("request", error);
      return Promise.reject({
        errorType: "REQUEST_FAILED",
        detail: error,
      });
    });
};

export default Request;
