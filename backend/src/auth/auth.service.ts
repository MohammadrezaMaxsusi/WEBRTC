import httpStatus from "http-status";
import { IResponseData } from "../shared/interfaces/response-data.interface";
import { ILoginWithUsernameAndPassword } from "./dto/login-with-password";
import { compare } from "bcrypt";
import { generateJWT } from "./functions/generate-token.function";
import sequelize from "../database/connectToDB";
import User from "../users/user.schema";
import Role from "../roles/role.schema";

const userRepo = sequelize.getRepository(User);
const roleRepo = sequelize.getRepository(Role);

export const loginWithUsernameAndPassword = async (
  data: ILoginWithUsernameAndPassword
): Promise<IResponseData> => {
  const userExists = await userRepo.findOne({
    where: { username: data.username },
    include: [roleRepo],
  });

  if (!userExists) {
    return {
      statusCode: httpStatus.FORBIDDEN,
      message: "نام کاربری یا رمز عبور اشتباه است",
    };
  }

  const passwordMatched = await compare(
    data.password,
    userExists.password as string
  );

  if (!passwordMatched) {
    return {
      statusCode: httpStatus.FORBIDDEN,
      message: "نام کاربری یا رمز عبور اشتباه است",
    };
  }

  let roleIds: number[];

  if (Array.isArray(userExists.roles)) {
    roleIds = userExists.roles.map((item) => item.id);
  } else {
    roleIds = [];
  }

  const { access, refresh } = generateJWT({
    userId: userExists.id.toString(),
    roleIds: userExists.roles.map((item) => item.id),
  });

  delete userExists.roles;

  return {
    data: {
      userExists,
      access,
      refresh,
    },
  };
};
