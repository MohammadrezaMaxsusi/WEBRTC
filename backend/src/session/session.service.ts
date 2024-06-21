import { IResponseData } from "../shared/interfaces/response-data.interface";
import sequelize from "../database/connectToDB";
import Session from "./session.schema";
import { IPayload } from "../auth/interfaces/jwt-payload.interface";
import { ICreateSession } from "./dto/request/create-session.dto";
import { IUpdateSession } from "./dto/request/update-session.dto";
import { IParamIdDto } from "../shared/dtos/requests/param-id.dto";
import httpStatus from "http-status";
import { listOptions } from "../shared/dtos/requests/list-options.dto";
import _ from "lodash";
import { findAllOptionsHandler } from "../shared/functions/findAllOptionsHandler.function";

const sessionRepo = sequelize.getRepository(Session);

export const createSession = async (
  data: ICreateSession,
  payload: IPayload
): Promise<IResponseData> => {
  const result = await sessionRepo.create({
    ...data,
    userId: payload.userId,
  });

  return {
    data: result,
  };
};

export const findOneSession = async (
  data: IParamIdDto
): Promise<IResponseData> => {
  const thisSession = await sessionRepo.findOne({ where: { id: data.id } });

  if (!thisSession) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: "نشست پیدا نشد",
    };
  }

  return {
    data: thisSession,
  };
};

export const findAllSessions = async (
  data: listOptions
): Promise<IResponseData> => {
  const options: listOptions = _.pick(data, ["asc", "limit", "page", "sort"]);
  data = _.omit(data, ["asc", "limit", "page", "sort"]);

  const listOptions = findAllOptionsHandler(options);

  const result = await sessionRepo.findAll({
    where: { ...data },
    ...listOptions,
  });

  const count = await sessionRepo.count({ where: { ...data } });

  return {
    data: result,
    metadata: { totalCount: count },
  };
};

export const updateSession = async (
  data: IUpdateSession
): Promise<IResponseData> => {
  const thisSession = await sessionRepo.findOne({ where: { id: data.id } });

  if (!thisSession) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: "نشست پیدا نشد",
    };
  }

  await sessionRepo.update(
    {
      ...data,
    },
    { where: { id: data.id } }
  );

  return {};
};

export const deleteSession = async (
  data: IParamIdDto
): Promise<IResponseData> => {
  const thisSession = await sessionRepo.findOne({ where: { id: data.id } });

  if (!thisSession) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: "نشست پیدا نشد",
    };
  }
  await sessionRepo.destroy({ where: { id: data.id } });

  return {};
};
