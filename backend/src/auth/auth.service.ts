import httpStatus from "http-status";
import { IResponseData } from "../shared/interfaces/response-data.interface";
import { ILoginWithUsernameAndPassword } from "./dto/login-with-password";
import { compare, hash } from "bcryptjs";
import { generateJWT } from "./functions/generate-token.function";
import sequelize from "../database/connectToDB";
import User from "../users/user.schema";
import Role from "../roles/role.schema";
import { IRegisterWithUsernameAndPassword } from "./dto/register";
import { ensureBaseRoleExists } from "../shared/functions/ensureBaseRoleExists.function";
import { ensureUserRoleExists } from "../shared/functions/ensureUserRoleExists.function";

const userRepo = sequelize.getRepository(User);
const roleRepo = sequelize.getRepository(Role);

export const loginWithUsernameAndPassword = async (
  data: ILoginWithUsernameAndPassword
): Promise<IResponseData> => {
  const thisUser = await userRepo.findOne({
    where: { username: data.username },
    include: [roleRepo],
  });

  if (!thisUser) {
    return {
      statusCode: httpStatus.FORBIDDEN,
      message: "نام کاربری یا رمز عبور اشتباه است",
    };
  }

  const passwordMatched = await compare(
    data.password,
    thisUser.password as string
  );

  if (!passwordMatched) {
    return {
      statusCode: httpStatus.FORBIDDEN,
      message: "نام کاربری یا رمز عبور اشتباه است",
    };
  }

  let roleIds: number[];

  if (Array.isArray(thisUser.roles)) {
    roleIds = thisUser.roles.map((item) => item.id);
  } else {
    roleIds = [];
  }

  const { access, refresh } = generateJWT({
    userId: thisUser.id,
    roleIds: thisUser.roles.map((item) => item.id),
  });

  delete thisUser.roles;

  return {
    data: {
      user: thisUser,
      access,
      refresh,
    },
  };
};

export const registerWithUsernameAndPassword = async (
  data: IRegisterWithUsernameAndPassword
): Promise<IResponseData> => {
  const duplicateUser = await userRepo.findOne({
    where: { username: data.username },
  });

  if (duplicateUser) {
    return {
      statusCode: httpStatus.FORBIDDEN,
      message: "نام کاربری تکراری است",
    };
  }

  const hashedPassword = await hash(data.password, 10);

  const thisUser = await userRepo.create({ ...data, password: hashedPassword });
  const baseRole = await ensureBaseRoleExists();
  const userRole = await ensureUserRoleExists(thisUser, baseRole);

  const { access, refresh } = generateJWT({
    userId: thisUser.id,
    roleIds: [baseRole.id],
  });

  delete thisUser.roles;

  return {
    data: {
      user: thisUser,
      access,
      refresh,
    },
  };
};
