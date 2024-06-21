import { IResponseData } from "../shared/interfaces/response-data.interface";
import sequelize from "../database/connectToDB";
import { IPayload } from "../auth/interfaces/jwt-payload.interface";
import { IParamIdDto } from "../shared/dtos/requests/param-id.dto";
import httpStatus from "http-status";
import { listOptions } from "../shared/dtos/requests/list-options.dto";
import _ from "lodash";
import { findAllOptionsHandler } from "../shared/functions/findAllOptionsHandler.function";
import SessionEvent from "./sessionUser.schema";
import { ISessionUser } from "./sessionUser.interface";
import SessionUser from "./sessionUser.schema";
import User from "../users/user.schema";
import Session from "../session/session.schema";

const sessionUserRepo = sequelize.getRepository(SessionUser);
const userRepo = sequelize.getRepository(User);
const sessionRepo = sequelize.getRepository(Session);

export const addUserToSession = async (
  data: ISessionUser
): Promise<IResponseData> => {
  const thisUser = await userRepo.findOne({
    where: { id: data.userId },
  });

  if (!thisUser) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: "کاربر پیدا نشد",
    };
  }

  const thisSession = await sessionRepo.findOne({
    where: { id: data.sessionId },
  });

  if (!thisSession) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: "نشست پیدا نشد",
    };
  }

  if (
    await sessionUserRepo.findOne({
      where: { userId: data.userId, sessionId: data.sessionId },
    })
  ) {
    return {
      statusCode: httpStatus.CONFLICT,
      message: "کاربر قبلا عضو این نشست شده است",
    };
  }

  await sessionUserRepo.create(data);

  return {};
};

export const removeUserFromSession = async (
  data: ISessionUser
): Promise<IResponseData> => {
  const thisUser = await userRepo.findOne({
    where: { id: data.userId },
  });

  if (!thisUser) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: "کاربر پیدا نشد",
    };
  }

  const thisSession = await sessionRepo.findOne({
    where: { id: data.sessionId },
  });

  if (!thisSession) {
    return {
      statusCode: httpStatus.NOT_FOUND,
      message: "نشست پیدا نشد",
    };
  }

  if (
    !(await sessionUserRepo.findOne({
      where: { userId: data.userId, sessionId: data.sessionId },
    }))
  ) {
    return {
      statusCode: httpStatus.CONFLICT,
      message: "کاربر عضو این نشست نیست",
    };
  }

  await sessionUserRepo.destroy({ where: { ...data } });

  return {};
};
