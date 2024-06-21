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
exports.Authorization = void 0;
const http_status_1 = __importDefault(require("http-status"));
const connectToDB_1 = __importDefault(require("../../database/connectToDB"));
const permission_schema_1 = __importDefault(require("../../permissions/permission.schema"));
const role_schema_1 = __importDefault(require("../../roles/role.schema"));
const permissionRole_schema_1 = __importDefault(require("../../permissionRole/permissionRole.schema"));
const sequelize_1 = require("sequelize");
const main_roles_enum_1 = require("../enums/main-roles.enum");
const permissionRepo = connectToDB_1.default.getRepository(permission_schema_1.default);
const roleRepo = connectToDB_1.default.getRepository(role_schema_1.default);
const permissionRoleRepo = connectToDB_1.default.getRepository(permissionRole_schema_1.default);
const errorResponse = {
    data: {},
    error: true,
    message: "دسترسی غیر مجاز",
    statusCode: http_status_1.default.FORBIDDEN,
};
const Authorization = (permissionName) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const reqCopy = req;
        const payload = reqCopy.payload;
        if (!payload || !(payload === null || payload === void 0 ? void 0 : payload.roleIds)) {
            return res.status(http_status_1.default.FORBIDDEN).json(errorResponse);
        }
        const isSuperAdmin = yield roleRepo.findOne({
            where: {
                id: { [sequelize_1.Op.in]: payload.roleIds },
                name: main_roles_enum_1.MAIN_ROLES_ENUM.SUPER_ADMIN,
            },
        });
        if (isSuperAdmin) {
            return next();
        }
        const permission = yield permissionRepo.findOne({
            where: {
                name: permissionName,
                // roles:  payload.roleId,
            },
        });
        const hasPermission = yield permissionRoleRepo.findOne({
            where: {
                roleId: payload.roleIds,
                permissionId: permission.id,
            },
        });
        if (!hasPermission) {
            return res.status(http_status_1.default.FORBIDDEN).json(errorResponse);
        }
        return next();
    });
};
exports.Authorization = Authorization;
