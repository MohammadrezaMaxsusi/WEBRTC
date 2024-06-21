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
exports.deleteSession = exports.updateSession = exports.findAllSessions = exports.findOneSession = exports.createSession = void 0;
const connectToDB_1 = __importDefault(require("../database/connectToDB"));
const session_schema_1 = __importDefault(require("./session.schema"));
const http_status_1 = __importDefault(require("http-status"));
const lodash_1 = __importDefault(require("lodash"));
const findAllOptionsHandler_function_1 = require("../shared/functions/findAllOptionsHandler.function");
const sessionRepo = connectToDB_1.default.getRepository(session_schema_1.default);
const createSession = (data, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield sessionRepo.create(Object.assign(Object.assign({}, data), { userId: payload.userId }));
    return {
        data: result,
    };
});
exports.createSession = createSession;
const findOneSession = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const thisSession = yield sessionRepo.findOne({ where: { id: data.id } });
    if (!thisSession) {
        return {
            statusCode: http_status_1.default.NOT_FOUND,
            message: "نشست پیدا نشد",
        };
    }
    return {
        data: thisSession,
    };
});
exports.findOneSession = findOneSession;
const findAllSessions = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const options = lodash_1.default.pick(data, ["asc", "limit", "page", "sort"]);
    data = lodash_1.default.omit(data, ["asc", "limit", "page", "sort"]);
    const listOptions = (0, findAllOptionsHandler_function_1.findAllOptionsHandler)(options);
    const result = yield sessionRepo.findAll(Object.assign({ where: Object.assign({}, data) }, listOptions));
    const count = yield sessionRepo.count({ where: Object.assign({}, data) });
    return {
        data: result,
        metadata: { totalCount: count },
    };
});
exports.findAllSessions = findAllSessions;
const updateSession = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const thisSession = yield sessionRepo.findOne({ where: { id: data.id } });
    if (!thisSession) {
        return {
            statusCode: http_status_1.default.NOT_FOUND,
            message: "نشست پیدا نشد",
        };
    }
    yield sessionRepo.update(Object.assign({}, data), { where: { id: data.id } });
    return {};
});
exports.updateSession = updateSession;
const deleteSession = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const thisSession = yield sessionRepo.findOne({ where: { id: data.id } });
    if (!thisSession) {
        return {
            statusCode: http_status_1.default.NOT_FOUND,
            message: "نشست پیدا نشد",
        };
    }
    yield sessionRepo.destroy({ where: { id: data.id } });
    return {};
});
exports.deleteSession = deleteSession;
