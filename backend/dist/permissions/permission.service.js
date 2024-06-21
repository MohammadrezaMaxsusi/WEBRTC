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
exports.removeRoleFromPermission = exports.addRoleToPermission = exports.deleteOnePermission = exports.updateOnePermission = exports.findAllPermissions = exports.findOnePermission = exports.createPermission = void 0;
const http_status_1 = __importDefault(require("http-status"));
const connectToDB_1 = __importDefault(require("../database/connectToDB"));
const permission_schema_1 = __importDefault(require("./permission.schema"));
const role_schema_1 = __importDefault(require("../roles/role.schema"));
const lodash_1 = __importDefault(require("lodash"));
const findAllOptionsHandler_function_1 = require("../shared/functions/findAllOptionsHandler.function");
const permissionRole_schema_1 = __importDefault(require("../permissionRole/permissionRole.schema"));
const permissionRepo = connectToDB_1.default.getRepository(permission_schema_1.default);
const roleRepo = connectToDB_1.default.getRepository(role_schema_1.default);
const permissionRoleRepo = connectToDB_1.default.getRepository(permissionRole_schema_1.default);
const createPermission = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const duplicatePermission = yield permissionRepo.findOne({
        where: { name: data.name },
    });
    if (duplicatePermission) {
        return {
            statusCode: http_status_1.default.CONFLICT,
            message: "نام دسترسی تکراری است",
        };
    }
    const result = yield permissionRepo.create(data);
    return {
        statusCode: http_status_1.default.CREATED,
        message: "دسترسی ایجاد شد",
        data: result,
    };
});
exports.createPermission = createPermission;
const findOnePermission = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield permissionRepo.findOne({ where: { id: data.id } });
    if (!result) {
        return {
            statusCode: http_status_1.default.NOT_FOUND,
            message: "دسترسی پیدا نشد",
        };
    }
    return {
        data: result,
    };
});
exports.findOnePermission = findOnePermission;
const findAllPermissions = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const options = lodash_1.default.pick(data, ["asc", "limit", "page", "sort"]);
    data = lodash_1.default.omit(data, ["asc", "limit", "page", "sort"]);
    const listOptions = (0, findAllOptionsHandler_function_1.findAllOptionsHandler)(options);
    const result = yield permissionRepo.findAll(Object.assign({ where: Object.assign({}, data) }, listOptions));
    const count = yield permissionRepo.count({ where: Object.assign({}, data) });
    return {
        data: result,
        metadata: { totalCount: count },
    };
});
exports.findAllPermissions = findAllPermissions;
const updateOnePermission = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const permissionExists = yield permissionRepo.findOne({
        where: { id: data.id },
    });
    if (!permissionExists) {
        return {
            statusCode: http_status_1.default.NOT_FOUND,
            message: "دسترسی پیدا نشد",
        };
    }
    const result = yield permissionRepo.update({ name: data.name }, { where: { id: data.id } });
    return {};
});
exports.updateOnePermission = updateOnePermission;
const deleteOnePermission = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const permissionExists = yield permissionRepo.findOne({
        where: { id: data.id },
    });
    if (!permissionExists) {
        return {
            statusCode: http_status_1.default.NOT_FOUND,
            message: "دسترسی با این شناسه پیدا نشد",
        };
    }
    const result = yield permissionRepo.destroy({ where: { id: data.id } });
    return {};
});
exports.deleteOnePermission = deleteOnePermission;
// export const hardDeleteOnePermission = async (
//   data: IParamIdDto
// ): Promise<IResponseData> => {
//   const permissionExists = await permissionRepo.findOneAndHardDelete(data);
//   if (!permissionExists) {
//     return {
//       statusCode: httpStatus.NOT_FOUND,
//       message: "دسترسی با این شناسه پیدا نشد",
//     };
//   }
//   return {};
// };
const addRoleToPermission = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const permissionExists = yield permissionRepo.findOne({
        where: { id: data.permissionId },
    });
    if (!permissionExists) {
        return {
            statusCode: http_status_1.default.NOT_FOUND,
            message: "دسترسی با این شناسه پیدا نشد",
        };
    }
    const roleExists = yield roleRepo.findOne({
        where: { id: data.roleId },
    });
    if (!roleExists) {
        return {
            statusCode: http_status_1.default.NOT_FOUND,
            message: "نقش با این شناسه پیدا نشد",
        };
    }
    if (yield permissionRoleRepo.findOne({
        where: { roleId: data.roleId, permissionId: data.permissionId },
    })) {
        return {
            statusCode: http_status_1.default.CONFLICT,
            message: "این دسترسی قبلا به این نقش داده شده است",
        };
    }
    yield permissionRoleRepo.create(data);
    return {
        statusCode: http_status_1.default.CREATED,
    };
});
exports.addRoleToPermission = addRoleToPermission;
const removeRoleFromPermission = (data) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(yield permissionRoleRepo.findOne({
        where: { roleId: data.roleId, permissionId: data.permissionId },
    }))) {
        return {
            statusCode: http_status_1.default.NOT_FOUND,
            message: "این دسترسی برای این نقش تعریف نشده است",
        };
    }
    const permissionExists = yield permissionRepo.findOne({
        where: { id: data.permissionId },
    });
    if (!permissionExists) {
        return {
            statusCode: http_status_1.default.NOT_FOUND,
            message: "دسترسی با این شناسه پیدا نشد",
        };
    }
    const roleExists = yield roleRepo.findOne({
        where: { id: data.roleId },
    });
    if (!roleExists) {
        return {
            statusCode: http_status_1.default.NOT_FOUND,
            message: "نقش با این شناسه پیدا نشد",
        };
    }
    yield permissionRoleRepo.destroy({
        where: { roleId: data.roleId, permissionId: data.permissionId },
    });
    return {};
});
exports.removeRoleFromPermission = removeRoleFromPermission;
// export const checkAccessRoleToPermission = async (
//   data: Partial<ICheckAccessDto>
// ): Promise<IResponseData> => {
//   data.permissionId = new Types.ObjectId(data.permissionId);
//   data.roleId = new Types.ObjectId(data.roleId);
//   const permissionExists = await permissionRepo.findOne({
//     _id: data.permissionId,
//   });
//   if (!permissionExists) {
//     return {
//       statusCode: httpStatus.NOT_FOUND,
//       message: "مجوز پیدا نشد",
//     };
//   }
//   const roleExists = await roleRepo.findOne({ _id: data.roleId });
//   if (!roleExists) {
//     return {
//       statusCode: httpStatus.NOT_FOUND,
//       message: "نقش پیدا نشد",
//     };
//   }
//   const roleHasThisPermission = permissionExists.roles?.some(
//     (role) => role._id?.toString() === data.roleId?.toString()
//   );
//   if (!roleHasThisPermission) {
//     return {
//       message: "این نقش به این مجوز دسترسی ندارد",
//       data: { access: false },
//     };
//   }
//   return {
//     message: "این نقش به این مجوز دسترسی دارد",
//     data: { access: true },
//   };
// };
