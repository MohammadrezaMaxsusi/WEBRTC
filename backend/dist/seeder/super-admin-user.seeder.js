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
exports.superAdminUserSeeder = void 0;
const bcrypt_1 = require("bcrypt");
const configurations_1 = require("../config/configurations");
const connectToDB_1 = __importDefault(require("../database/connectToDB"));
const role_schema_1 = __importDefault(require("../roles/role.schema"));
const ensureSuperAdminRoleExists_function_1 = require("../shared/functions/ensureSuperAdminRoleExists.function");
const ensureUserRoleExists_function_1 = require("../shared/functions/ensureUserRoleExists.function");
const userRole_schema_1 = __importDefault(require("../userRole/userRole.schema"));
const user_schema_1 = __importDefault(require("../users/user.schema"));
const roleRepo = connectToDB_1.default.getRepository(role_schema_1.default);
const userRepo = connectToDB_1.default.getRepository(user_schema_1.default);
const userRoleRepo = connectToDB_1.default.getRepository(userRole_schema_1.default);
function superAdminUserSeeder() {
    return __awaiter(this, void 0, void 0, function* () {
        const superAdminUser = yield ensureUserExists();
        const superAdminRole = yield (0, ensureSuperAdminRoleExists_function_1.ensureSuperAdminRoleExists)();
        const superAdminUserRole = yield (0, ensureUserRoleExists_function_1.ensureUserRoleExists)(superAdminUser, superAdminRole);
    });
}
exports.superAdminUserSeeder = superAdminUserSeeder;
function ensureUserExists() {
    return __awaiter(this, void 0, void 0, function* () {
        let thisUser = yield userRepo.findOne({
            where: { username: configurations_1.configurations.app.superAdmin.username },
        });
        if (!thisUser) {
            const hashedPassword = yield (0, bcrypt_1.hash)(configurations_1.configurations.app.superAdmin.password, 10);
            thisUser = yield userRepo.create({
                firstName: "ادمین کل",
                lastName: "-",
                username: configurations_1.configurations.app.superAdmin.username,
                password: hashedPassword,
            });
        }
        return thisUser;
    });
}
