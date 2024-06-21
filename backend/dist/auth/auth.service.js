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
exports.registerWithUsernameAndPassword = exports.loginWithUsernameAndPassword = void 0;
const http_status_1 = __importDefault(require("http-status"));
const bcrypt_1 = require("bcrypt");
const generate_token_function_1 = require("./functions/generate-token.function");
const connectToDB_1 = __importDefault(require("../database/connectToDB"));
const user_schema_1 = __importDefault(require("../users/user.schema"));
const role_schema_1 = __importDefault(require("../roles/role.schema"));
const ensureBaseRoleExists_function_1 = require("../shared/functions/ensureBaseRoleExists.function");
const ensureUserRoleExists_function_1 = require("../shared/functions/ensureUserRoleExists.function");
const userRepo = connectToDB_1.default.getRepository(user_schema_1.default);
const roleRepo = connectToDB_1.default.getRepository(role_schema_1.default);
const loginWithUsernameAndPassword = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const thisUser = yield userRepo.findOne({
        where: { username: data.username },
        include: [roleRepo],
    });
    if (!thisUser) {
        return {
            statusCode: http_status_1.default.FORBIDDEN,
            message: "نام کاربری یا رمز عبور اشتباه است",
        };
    }
    const passwordMatched = yield (0, bcrypt_1.compare)(data.password, thisUser.password);
    if (!passwordMatched) {
        return {
            statusCode: http_status_1.default.FORBIDDEN,
            message: "نام کاربری یا رمز عبور اشتباه است",
        };
    }
    let roleIds;
    if (Array.isArray(thisUser.roles)) {
        roleIds = thisUser.roles.map((item) => item.id);
    }
    else {
        roleIds = [];
    }
    const { access, refresh } = (0, generate_token_function_1.generateJWT)({
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
});
exports.loginWithUsernameAndPassword = loginWithUsernameAndPassword;
const registerWithUsernameAndPassword = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const duplicateUser = yield userRepo.findOne({
        where: { username: data.username },
    });
    if (duplicateUser) {
        return {
            statusCode: http_status_1.default.FORBIDDEN,
            message: "نام کاربری تکراری است",
        };
    }
    const hashedPassword = yield (0, bcrypt_1.hash)(data.password, 10);
    const thisUser = yield userRepo.create(Object.assign(Object.assign({}, data), { password: hashedPassword }));
    const baseRole = yield (0, ensureBaseRoleExists_function_1.ensureBaseRoleExists)();
    const userRole = yield (0, ensureUserRoleExists_function_1.ensureUserRoleExists)(thisUser, baseRole);
    const { access, refresh } = (0, generate_token_function_1.generateJWT)({
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
});
exports.registerWithUsernameAndPassword = registerWithUsernameAndPassword;
