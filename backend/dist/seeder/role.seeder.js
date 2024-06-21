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
exports.roleSeeder = void 0;
const connectToDB_1 = __importDefault(require("../database/connectToDB"));
const role_schema_1 = __importDefault(require("../roles/role.schema"));
const ensureBaseRoleExists_function_1 = require("../shared/functions/ensureBaseRoleExists.function");
const ensureSuperAdminRoleExists_function_1 = require("../shared/functions/ensureSuperAdminRoleExists.function");
const roleRepo = connectToDB_1.default.getRepository(role_schema_1.default);
function roleSeeder() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, ensureSuperAdminRoleExists_function_1.ensureSuperAdminRoleExists)();
        yield (0, ensureBaseRoleExists_function_1.ensureBaseRoleExists)();
    });
}
exports.roleSeeder = roleSeeder;
