import { NextFunction, Request, Response } from "express";
import { Result, ValidationError, validationResult } from "express-validator";
import _ from "lodash";
import { IResponseData } from "../interfaces/response-data.interface";
import httpStatus from "http-status";

export const DataValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let responseObject: IResponseData;

  const result: Result<ValidationError> = validationResult(req);

  if (!result.isEmpty()) {
    const firstError: any = _.pick(result.array({ onlyFirstError: true })[0], [
      "path",
      "msg",
    ]);

    responseObject = {
      statusCode: httpStatus.BAD_REQUEST,
      message: firstError.msg,
      data: _.omit(firstError, ["msg"]),
      error: true,
      // errorDetail:
    };

    return res.status(responseObject.statusCode as number).json(responseObject);
  }

  req = whiteListIncomingData(req);

  return next();
};

function whiteListIncomingData(req: any): Request {
  const keys: string[] = [];

  if (req["express-validator#contexts"]?.length) {
    for (let item of req["express-validator#contexts"]) {
      keys.push(item.fields[0]);
    }
  }

  req.data = _.pick(req.data, keys);

  return req;
}
