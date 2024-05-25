import { IUser } from "./user.interface";
import { IResponseData } from "../shared/interfaces/response-data.interface";
import httpStatus from "http-status";
import { listOptions } from "../shared/dtos/requests/list-options.dto";
import _ from "lodash";
// import { UserResponseDto } from "./dto/response/user-response.dto";
import { ICheckUserRolePermission } from "./dto/request/check-user-with-role-permission.dto";
// import { PermissionRepository } from "../permissions/permission.repository";
// import { RoleRepository } from "../roles/role.repository";
import mongoose, { Types } from "mongoose";
import { IAddRoleToUser } from "./dto/request/add-role-to-user.dto";
import { IRemoveRoleFromUser } from "./dto/request/remove-role-from-user.dto";
import { hash } from "bcryptjs";
// import { IRole } from "../roles/role.interface";
import { IParamIdDto } from "../shared/dtos/requests/param-id.dto";
import { IPayload } from "../auth/interfaces/jwt-payload.interface";
import { repoFactory } from "../shared/constants/repo-factory.constant";
import sequelize from "../database/connectToDB";
import User from "./user.schema";

// const permissionRepo = repoFactory.getRepo<PermissionRepository>("permission");
// const roleRepo = repoFactory.getRepo<RoleRepository>("role");
const userRepo = sequelize.getRepository(User);

export const createUser = async (
  data: Partial<IUser>
): Promise<IResponseData> => {
  const duplicateUser = await userRepo.findOne({
    where: { username: data.username },
  });

  if (duplicateUser) {
    return {
      statusCode: httpStatus.CONFLICT,
      message: "نام کاربری تکراری است",
    };
  }

  const hashedPassword = await hash(data.password as string, 10);
  data.password = hashedPassword;

  const result = await userRepo.create(data);

  return {
    statusCode: httpStatus.CREATED,
    message: "کاربر ایجاد شد",
    data: result,
  };
};

// export const findOneUser = async (
//   data: Partial<IUser>
// ): Promise<IResponseData> => {
//   const result = await userRepo.findOne(data);

//   if (!result) {
//     return {
//       statusCode: httpStatus.NOT_FOUND,
//       message: "کاربر پیدا نشد",
//     };
//   }

//   return {
//     data: new UserResponseDto(result),
//   };
// };

// export const findAllUsers = async (
//   data: Partial<IUser> & listOptions
// ): Promise<IResponseData> => {
//   const options: listOptions = _.pick(data, ["asc", "limit", "page", "sort"]);
//   data = _.omit(data, ["asc", "limit", "page", "sort"]);

//   const result = await userRepo.findAll(data, options);

//   const count = await userRepo.countAll(data);

//   return {
//     data: result.map((item) => new UserResponseDto(item)),
//     metadata: { totalCount: count },
//   };
// };

// export const updateOneUser = async (
//   data: Partial<IUser>
// ): Promise<IResponseData> => {
//   const userExists = await userRepo.findOne(_.pick(data, ["_id"]));

//   if (!userExists) {
//     return {
//       statusCode: httpStatus.NOT_FOUND,
//       message: "کاربر با این شناسه پیدا نشد",
//     };
//   }

//   if (data.password) {
//     const hashedPassword = await hash(data.password as string, 10);
//     data.password = hashedPassword;
//   }

//   const result = (await userRepo.findOneAndUpdate(
//     _.pick(data, ["_id"]),
//     _.omit(data, ["_id"])
//   )) as IUser;

//   return {
//     data: new UserResponseDto(result),
//   };
// };

// export const deleteOneUser = async (
//   data: Partial<IUser>
// ): Promise<IResponseData> => {
//   const userExists = await userRepo.findOne(_.pick(data, ["_id"]));

//   if (!userExists) {
//     return {
//       statusCode: httpStatus.NOT_FOUND,
//       message: "کاربر با این شناسه پیدا نشد",
//     };
//   }

//   const result = (await userRepo.findOneAndSoftDelete(
//     _.pick(data, ["_id"])
//   )) as IUser;

//   return {
//     data: new UserResponseDto(result),
//   };
// };

// export const hardDeleteOneUser = async (
//   data: IParamIdDto
// ): Promise<IResponseData> => {
//   const userExists = await userRepo.findOneAndHardDelete(data);

//   if (!userExists) {
//     return {
//       statusCode: httpStatus.NOT_FOUND,
//       message: "کاربر با این شناسه پیدا نشد",
//     };
//   }

//   return {};
// };

// export const checkUserWithRoleAndPermission = async (
//   data: Partial<ICheckUserRolePermission>
// ): Promise<IResponseData> => {
//   data.userId = new mongoose.Types.ObjectId(data.userId);
//   data.roleId = new mongoose.Types.ObjectId(data.roleId);
//   data.permissionId = new mongoose.Types.ObjectId(data.permissionId);

//   const userExists = await userRepo.findOne({ _id: data.userId });
//   const roleExists = await roleRepo.findOne({ _id: data.roleId });
//   const permissionExists = await permissionRepo.findOne({
//     _id: data.permissionId,
//   });

//   if (!userExists) {
//     return {
//       statusCode: httpStatus.NOT_FOUND,
//       message: "کاربر پیدا نشد",
//     };
//   }

//   if (!roleExists) {
//     return {
//       statusCode: httpStatus.NOT_FOUND,
//       message: "نقش پیدا نشد",
//     };
//   }

//   if (!permissionExists) {
//     return {
//       statusCode: httpStatus.NOT_FOUND,
//       message: "دسترسی پیدا نشد",
//     };
//   }

//   //  first check if user has that role:
//   //  1. if yes => check if role has access to that permission
//   //  2. if not => return with error
//   const userHasThisRole = userExists.roles?.some(
//     (role) => role._id.toString() === data.roleId?.toString()
//   );

//   if (!userHasThisRole) {
//     return {
//       message: "عدم دسترسی",
//       data: { access: false },
//     };
//   }

//   const roleHasThisPermission = permissionExists.roles?.some(
//     (role) => role._id?.toString() === data.roleId?.toString()
//   );

//   if (!roleHasThisPermission) {
//     return {
//       message: "عدم دسترسی",
//       data: { access: false },
//     };
//   }

//   return {
//     message: "این دسترسی برای کاربر وجود دارد",
//     data: { access: true },
//   };
// };

// export const addRole = async (
//   data: Partial<IAddRoleToUser>
// ): Promise<IResponseData> => {
//   data.userId = new mongoose.Types.ObjectId(data.userId);
//   data.roleId = new mongoose.Types.ObjectId(data.roleId);

//   const userExists = await userRepo.findOne({ _id: data.userId });
//   const roleExists = await roleRepo.findOne({ _id: data.roleId });

//   if (!userExists) {
//     return {
//       statusCode: httpStatus.NOT_FOUND,
//       message: "کاربر پیدا نشد",
//     };
//   }

//   if (!roleExists) {
//     return {
//       statusCode: httpStatus.NOT_FOUND,
//       message: "نقش پیدا نشد",
//     };
//   }

//   //  first check if user has that role:
//   //  1. if yes => return with error
//   //  2. if not => add role to user

//   const userHasThisRole = userExists.roles?.some(
//     (role) => role._id.toString() === data.roleId?.toString()
//   );

//   if (userHasThisRole) {
//     return {
//       statusCode: httpStatus.CONFLICT,
//       message: "این نقش قبلا برای این کاربر تعریف شده است",
//     };
//   }

//   let allRoles: Types.ObjectId[];

//   if (Array.isArray(userExists.roles)) {
//     allRoles = [...userExists.roles.map((item) => item._id), data.roleId];
//   } else {
//     allRoles = [data.roleId];
//   }

//   const result = await userRepo.findOneAndUpdate(
//     { _id: data.userId },
//     { roles: allRoles }
//   );

//   return {
//     message: `نقش ${roleExists.name} به کاربر ${userExists.username} اضافه شد`,
//     data: result as object,
//   };
// };

// export const removeRole = async (
//   data: Partial<IRemoveRoleFromUser>
// ): Promise<IResponseData> => {
//   data.userId = new mongoose.Types.ObjectId(data.userId);
//   data.roleId = new mongoose.Types.ObjectId(data.roleId);

//   const userExists = await userRepo.findOne({ _id: data.userId });
//   const roleExists = await roleRepo.findOne({ _id: data.roleId });

//   if (!userExists) {
//     return {
//       statusCode: httpStatus.NOT_FOUND,
//       message: "کاربر پیدا نشد",
//     };
//   }

//   if (!roleExists) {
//     return {
//       statusCode: httpStatus.NOT_FOUND,
//       message: "نقش پیدا نشد",
//     };
//   }

//   //  first check if user has that role:
//   //  1. if yes => remove role from user
//   //  2. if not => return with error

//   const userHasThisRole = userExists.roles?.some(
//     (role) => role._id.toString() === data.roleId?.toString()
//   );

//   if (!userHasThisRole) {
//     return {
//       statusCode: httpStatus.BAD_REQUEST,
//       message: "این نقش برای این کاربر تعریف نشده است",
//     };
//   }

//   let allRoles: IRole[];

//   allRoles = (userExists.roles as IRole[]).filter(
//     (item) => item._id.toString() !== data.roleId?.toString()
//   );

//   const result = await userRepo.findOneAndUpdate(
//     { _id: data.userId },
//     { roles: allRoles.map((role) => role._id) }
//   );

//   return {
//     message: `نقش ${roleExists.name} از کاربر ${userExists.username} حذف شد`,
//     data: result as object,
//   };
// };

// export const getMyselfInfo = async (
//   data: {},
//   payload: IPayload
// ): Promise<IResponseData> => {
//   const { userId } = payload;

//   const user = await userRepo.findOne({ _id: userId });

//   return {
//     data: user,
//   };
// };
