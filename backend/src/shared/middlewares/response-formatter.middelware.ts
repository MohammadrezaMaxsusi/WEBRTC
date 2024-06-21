import { NextFunction, Request, Response } from "express";
import { IResponseData } from "../interfaces/response-data.interface";
import httpStatus from "http-status";
import {
  SharedErrorMessages,
  SharedSuccessMessages,
} from "../enums/shared-messages.enum";
import { incomingDataCollector } from "../utils/functions/incoming-data-collector.function";
import { RequestWithPayload } from "../interfaces/request-with-payload.interface";
import { responseDataModifier } from "../utils/functions/change-response-data.function";

export function ResponseFormatter(fn: any) {
  return async (req: RequestWithPayload, res: Response, next: NextFunction) => {
    let requestData = incomingDataCollector(req);
    const payload = req?.payload;

    let responseObject: IResponseData;
    try {
      const fnResult: IResponseData = await fn?.apply({}, [
        requestData,
        payload,
        req,
      ]);

      if (!fnResult.statusCode) {
        fnResult.statusCode = 200;
      }

      if (!fnResult.message) {
        fnResult.message = SharedSuccessMessages.SUCCESS;
      }

      if (!fnResult.data) {
        fnResult.data = {};
      }

      if (fnResult.statusCode >= 400) {
        fnResult.error = true;
        // fnResult.data = {};
      }

      responseObject = fnResult;
    } catch (error) {
      console.error(error);

      responseObject = {
        error: true,
        message: SharedErrorMessages.INTERNAL_SERVER_ERROR,
        statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        data: {},
      };
    }

    let deepCopyData = JSON.parse(JSON.stringify(responseObject.data));
    responseObject.data = responseDataModifier(deepCopyData);

    return res
      .status(responseObject?.statusCode as number)
      .json(responseObject);
  };
}
