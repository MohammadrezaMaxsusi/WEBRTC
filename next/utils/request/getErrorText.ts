//@ts-ignore
import _ from "lodash";
export const getErrorText = (err: any) => {
  return _.get(err, "detail.response.data.error", "");
};
export const getErrorTextTwo = (err: any) => {
  return _.get(err, "detail.response.data.message", "");
};

export const getMessage = (res: any) => {
  return _.get(res, "message", "");
};
