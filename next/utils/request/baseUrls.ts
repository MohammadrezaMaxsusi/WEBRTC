// @ts-nocheck
import _ from "lodash";

export const getBaseUrl = () => {
  if (typeof window !== undefined) {
    return _.get(window, "location.origin", "");
  } else {
    return "";
  }
};
