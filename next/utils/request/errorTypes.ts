// @ts-nocheck
import generalMessages from "../i18n/generalMessages";
import _ from "lodash";

export const errorTypes = {
  BUSINESS_ERROR: 417,
};

export const getErrorData = (err) => {
  const code = _.get(err, ["detail", "response", "data", "StatusCode"], -1);
  const message = _.get(
    err,
    ["detail", "response", "data", "FaErrorMessage"],
    ""
  );

  return getErrorTypeByCode(code, message);
};

export const getErrorTypeByCode = (code, message) => {
  if (code >= 500) {
    return generalMessages.AN_ERROR_ACCORD;
  } else if (code == 417) {
    return message;
  } else {
    return generalMessages.AN_ERROR_ACCORD;
  }
};
