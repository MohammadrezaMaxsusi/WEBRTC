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
exports.removeUserFromSession = exports.addUserToSession = void 0;
const connectToDB_1 = __importDefault(require("../database/connectToDB"));
const http_status_1 = __importDefault(require("http-status"));
const sessionUser_schema_1 = __importDefault(require("./sessionUser.schema"));
const user_schema_1 = __importDefault(require("../users/user.schema"));
const session_schema_1 = __importDefault(require("../session/session.schema"));
const sessionUserRepo = connectToDB_1.default.getRepository(sessionUser_schema_1.default);
const userRepo = connectToDB_1.default.getRepository(user_schema_1.default);
const sessionRepo = connectToDB_1.default.getRepository(session_schema_1.default);
const addUserToSession = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const thisUser = yield userRepo.findOne({
        where: { id: data.userId },
    });
    if (!thisUser) {
        return {
            statusCode: http_status_1.default.NOT_FOUND,
            message: "کاربر پیدا نشد",
        };
    }
    const thisSession = yield sessionRepo.findOne({
        where: { id: data.sessionId },
    });
    if (!thisSession) {
        return {
            statusCode: http_status_1.default.NOT_FOUND,
            message: "نشست پیدا نشد",
        };
    }
    if (yield sessionUserRepo.findOne({
        where: { userId: data.userId, sessionId: data.sessionId },
    })) {
        return {
            statusCode: http_status_1.default.CONFLICT,
            message: "کاربر قبلا عضو این نشست شده است",
        };
    }
    yield sessionUserRepo.create(data);
    return {};
});
exports.addUserToSession = addUserToSession;
const removeUserFromSession = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const thisUser = yield userRepo.findOne({
        where: { id: data.userId },
    });
    if (!thisUser) {
        return {
            statusCode: http_status_1.default.NOT_FOUND,
            message: "کاربر پیدا نشد",
        };
    }
    const thisSession = yield sessionRepo.findOne({
        where: { id: data.sessionId },
    });
    if (!thisSession) {
        return {
            statusCode: http_status_1.default.NOT_FOUND,
            message: "نشست پیدا نشد",
        };
    }
    if (!(yield sessionUserRepo.findOne({
        where: { userId: data.userId, sessionId: data.sessionId },
    }))) {
        return {
            statusCode: http_status_1.default.CONFLICT,
            message: "کاربر عضو این نشست نیست",
        };
    }
    yield sessionUserRepo.destroy({ where: Object.assign({}, data) });
    return {};
});
exports.removeUserFromSession = removeUserFromSession;
