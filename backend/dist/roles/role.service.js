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
exports.deleteOneRole = exports.updateOneRole = exports.findOneRole = exports.findAllRoles = exports.createRole = void 0;
const http_status_1 = __importDefault(require("http-status"));
const role_messages_enum_1 = require("./enums/role-messages.enum");
const lodash_1 = __importDefault(require("lodash"));
const main_roles_enum_1 = require("../shared/enums/main-roles.enum");
const role_schema_1 = __importDefault(require("./role.schema"));
const connectToDB_1 = __importDefault(require("../database/connectToDB"));
const findAllOptionsHandler_function_1 = require("../shared/functions/findAllOptionsHandler.function");
const roleRepo = connectToDB_1.default.getRepository(role_schema_1.default);
const createRole = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const duplicateRole = yield roleRepo.findOne({ where: { name: data.name } });
    if (duplicateRole) {
        return {
            statusCode: http_status_1.default.CONFLICT,
            message: role_messages_enum_1.RoleErrorMessages.DUPLICATE,
        };
    }
    const result = yield roleRepo.create(data);
    return {
        statusCode: http_status_1.default.CREATED,
        message: role_messages_enum_1.RoleSuccessMessages.CREATED,
        data: result,
    };
});
exports.createRole = createRole;
const findAllRoles = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const options = lodash_1.default.pick(data, ["asc", "limit", "page", "sort"]);
    data = lodash_1.default.omit(data, ["asc", "limit", "page", "sort"]);
    const listOptions = (0, findAllOptionsHandler_function_1.findAllOptionsHandler)(options);
    const result = yield roleRepo.findAll(Object.assign({ where: Object.assign({}, data) }, listOptions));
    const count = yield roleRepo.count({ where: Object.assign({}, data) });
    return {
        data: result,
        metadata: { totalCount: count },
    };
});
exports.findAllRoles = findAllRoles;
const findOneRole = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield roleRepo.findOne({ where: Object.assign({}, data) });
    if (!result) {
        return {
            statusCode: http_status_1.default.NOT_FOUND,
            message: role_messages_enum_1.RoleErrorMessages.NOT_FOUND,
        };
    }
    return {
        message: role_messages_enum_1.RoleSuccessMessages.FOUND,
        data: result,
    };
});
exports.findOneRole = findOneRole;
const updateOneRole = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const roleExists = yield roleRepo.findOne({
        where: { id: data.id },
    });
    if (!roleExists) {
        return {
            statusCode: http_status_1.default.NOT_FOUND,
            message: role_messages_enum_1.RoleErrorMessages.NOT_FOUND,
        };
    }
    if (roleExists.name === main_roles_enum_1.MAIN_ROLES_ENUM.SUPER_ADMIN) {
        return {
            statusCode: http_status_1.default.FORBIDDEN,
            message: role_messages_enum_1.RoleErrorMessages.FORBIDDEN_UPDATE_SUPER_ADMIN_ROLE,
        };
    }
    const duplicateRole = yield roleRepo.findOne({ where: { name: data === null || data === void 0 ? void 0 : data.name } });
    if (duplicateRole && (roleExists === null || roleExists === void 0 ? void 0 : roleExists.id) !== (duplicateRole === null || duplicateRole === void 0 ? void 0 : duplicateRole.id)) {
        return {
            statusCode: http_status_1.default.CONFLICT,
            message: role_messages_enum_1.RoleErrorMessages.DUPLICATE,
        };
    }
    const result = yield roleRepo.update(Object.assign({}, lodash_1.default.omit(data, ["id"])), { where: { id: data.id } });
    return {
        message: role_messages_enum_1.RoleSuccessMessages.UPDATED,
    };
});
exports.updateOneRole = updateOneRole;
const deleteOneRole = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const roleExists = yield roleRepo.findOne({
        where: { id: data.id },
    });
    if (!roleExists) {
        return {
            statusCode: http_status_1.default.NOT_FOUND,
            message: role_messages_enum_1.RoleErrorMessages.NOT_FOUND,
        };
    }
    if (roleExists.name === main_roles_enum_1.MAIN_ROLES_ENUM.SUPER_ADMIN) {
        return {
            statusCode: http_status_1.default.FORBIDDEN,
            message: role_messages_enum_1.RoleErrorMessages.FORBIDDEN_DELETE_SUPER_ADMIN_ROLE,
        };
    }
    const result = yield roleRepo.destroy({
        where: { id: data.id },
    });
    return {
        message: role_messages_enum_1.RoleSuccessMessages.DELETED,
    };
});
exports.deleteOneRole = deleteOneRole;
// export const hardDeleteOneRole = async (
//   data: IParamIdDto
// ): Promise<IResponseData> => {
//   const roleExists = await roleRepo.destroy({ where: { ...data } });
//   if (!roleExists) {
//     return {
//       statusCode: httpStatus.NOT_FOUND,
//       message: RoleErrorMessages.NOT_FOUND,
//     };
//   }
//   return {};
// };
// export const getPermissions = async (
//   data: IParamIdDto
// ): Promise<IResponseData> => {
//   const roleExists = await roleRepo.findOne({where:{...data}, });
//   if (!roleExists) {
//     return {
//       statusCode: httpStatus.NOT_FOUND,
//       message: RoleErrorMessages.NOT_FOUND,
//     };
//   }
//   return {
//     data: await permissionRepo.getRolePermissions(data._id),
//   };
// };
