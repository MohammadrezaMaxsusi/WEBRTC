"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneUser = exports.updateOneUser = exports.findAllUsers = exports.findOneUser = exports.createUser = void 0;
const http_status_1 = __importDefault(require("http-status"));
const lodash_1 = __importDefault(require("lodash"));
const bcrypt_1 = require("bcrypt");
const connectToDB_1 = __importDefault(require("../database/connectToDB"));
const user_schema_1 = __importDefault(require("./user.schema"));
const findAllOptionsHandler_function_1 = require("../shared/functions/findAllOptionsHandler.function");
// const permissionRepo = repoFactory.getRepo<PermissionRepository>("permission");
// const roleRepo = repoFactory.getRepo<RoleRepository>("role");
const userRepo = connectToDB_1.default.getRepository(user_schema_1.default);
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const duplicateUser = yield userRepo.findOne({
        where: { username: data.username },
    });
    if (duplicateUser) {
        return {
            statusCode: http_status_1.default.CONFLICT,
            message: "نام کاربری تکراری است",
        };
    }
    const hashedPassword = yield (0, bcrypt_1.hash)(data.password, 10);
    data.password = hashedPassword;
    const result = yield userRepo.create(data);
    return {
        statusCode: http_status_1.default.CREATED,
        message: "کاربر ایجاد شد",
        data: result,
    };
});
exports.createUser = createUser;
const findOneUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield userRepo.findOne({ where: { id: data.id } });
    if (!result) {
        return {
            statusCode: http_status_1.default.NOT_FOUND,
            message: "کاربر پیدا نشد",
        };
    }
    return {
        data: result,
    };
});
exports.findOneUser = findOneUser;
const findAllUsers = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const options = lodash_1.default.pick(data, ["asc", "limit", "page", "sort"]);
    data = lodash_1.default.omit(data, ["asc", "limit", "page", "sort"]);
    const listOptions = (0, findAllOptionsHandler_function_1.findAllOptionsHandler)(options);
    const result = yield userRepo.findAll(Object.assign({ where: Object.assign({}, data) }, listOptions));
    const count = yield userRepo.count({ where: Object.assign({}, data) });
    return {
        data: result,
        metadata: { totalCount: count },
    };
});
exports.findAllUsers = findAllUsers;
const updateOneUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, username } = data;
    const thisUser = yield userRepo.findOne({ where: { id } });
    if (!thisUser) {
        return {
            statusCode: http_status_1.default.NOT_FOUND,
            message: "کاربر پیدا نشد",
        };
    }
    if (thisUser.username === "super_admin" && username) {
        return {
            statusCode: http_status_1.default.FORBIDDEN,
            message: "نام کاربری ادمین کل قابل تغییر نیست",
        };
    }
    if (username && (yield userRepo.findOne({ where: { username } }))) {
        return {
            statusCode: http_status_1.default.CONFLICT,
            message: "این نام کاربری قبلا تعریف شده است",
        };
    }
    yield userRepo.update(data, { where: { id: data.id } });
    return {};
});
exports.updateOneUser = updateOneUser;
const deleteOneUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const thisUser = yield userRepo.findOne({ where: { id: data.id } });
    if (!thisUser) {
        return {
            statusCode: http_status_1.default.NOT_FOUND,
            message: "کاربر با این شناسه پیدا نشد",
        };
    }
    if (thisUser.username === "super_admin") {
        return {
            statusCode: http_status_1.default.FORBIDDEN,
            message: "حذف ادمین کل ممکن نیست",
        };
    }
    yield userRepo.destroy({ where: { id: data.id } });
    return {};
});
exports.deleteOneUser = deleteOneUser;
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
