import { IResponseData } from "../shared/interfaces/response-data.interface";
import sequelize from "../database/connectToDB";
import Session from "./sessionEvent.schema";
import { IPayload } from "../auth/interfaces/jwt-payload.interface";
import { IParamIdDto } from "../shared/dtos/requests/param-id.dto";
import httpStatus from "http-status";
import { listOptions } from "../shared/dtos/requests/list-options.dto";
import _ from "lodash";
import { findAllOptionsHandler } from "../shared/functions/findAllOptionsHandler.function";
import { ISessionEvent } from "./sessionEvent.interface";
import SessionEvent from "./sessionEvent.schema";

const sessionEventRepo = sequelize.getRepository(SessionEvent);

export const createSessionEvent = async (
  data: ISessionEvent
): Promise<IResponseData> => {
  await sessionEventRepo.create({
    ...data,
  });

  return {};
};
