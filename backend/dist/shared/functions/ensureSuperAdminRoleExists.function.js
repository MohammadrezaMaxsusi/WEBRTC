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
exports.ensureSuperAdminRoleExists = void 0;
const connectToDB_1 = __importDefault(require("../../database/connectToDB"));
const role_schema_1 = __importDefault(require("../../roles/role.schema"));
const main_roles_enum_1 = require("../../shared/enums/main-roles.enum");
const roleRepo = connectToDB_1.default.getRepository(role_schema_1.default);
const ensureSuperAdminRoleExists = () => __awaiter(void 0, void 0, void 0, function* () {
    let thisRole = yield roleRepo.findOne({
        where: {
            name: main_roles_enum_1.MAIN_ROLES_ENUM.SUPER_ADMIN,
        },
    });
    if (!thisRole) {
        thisRole = yield roleRepo.create({
            name: main_roles_enum_1.MAIN_ROLES_ENUM.SUPER_ADMIN,
        });
    }
    return thisRole;
});
exports.ensureSuperAdminRoleExists = ensureSuperAdminRoleExists;
