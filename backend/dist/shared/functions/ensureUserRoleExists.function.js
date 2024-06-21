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
exports.ensureUserRoleExists = void 0;
const connectToDB_1 = __importDefault(require("../../database/connectToDB"));
const userRole_schema_1 = __importDefault(require("../../userRole/userRole.schema"));
const userRoleRepo = connectToDB_1.default.getRepository(userRole_schema_1.default);
const ensureUserRoleExists = (thisUser, thisRole) => __awaiter(void 0, void 0, void 0, function* () {
    let thisUserRole = yield userRoleRepo.findOne({
        where: {
            userId: thisUser.id,
            roleId: thisRole.id,
        },
    });
    if (!thisUserRole) {
        thisUserRole = yield userRoleRepo.create({
            userId: thisUser.id,
            roleId: thisRole.id,
        });
    }
    return thisUserRole;
});
exports.ensureUserRoleExists = ensureUserRoleExists;
