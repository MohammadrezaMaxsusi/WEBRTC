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
exports.ResponseFormatter = void 0;
const http_status_1 = __importDefault(require("http-status"));
const shared_messages_enum_1 = require("../enums/shared-messages.enum");
const incoming_data_collector_function_1 = require("../utils/functions/incoming-data-collector.function");
const change_response_data_function_1 = require("../utils/functions/change-response-data.function");
function ResponseFormatter(fn) {
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        let requestData = (0, incoming_data_collector_function_1.incomingDataCollector)(req);
        const payload = req === null || req === void 0 ? void 0 : req.payload;
        let responseObject;
        try {
            const fnResult = yield (fn === null || fn === void 0 ? void 0 : fn.apply({}, [
                requestData,
                payload,
                req,
            ]));
            if (!fnResult.statusCode) {
                fnResult.statusCode = 200;
            }
            if (!fnResult.message) {
                fnResult.message = shared_messages_enum_1.SharedSuccessMessages.SUCCESS;
            }
            if (!fnResult.data) {
                fnResult.data = {};
            }
            if (fnResult.statusCode >= 400) {
                fnResult.error = true;
                // fnResult.data = {};
            }
            responseObject = fnResult;
        }
        catch (error) {
            console.error(error);
            responseObject = {
                error: true,
                message: shared_messages_enum_1.SharedErrorMessages.INTERNAL_SERVER_ERROR,
                statusCode: http_status_1.default.INTERNAL_SERVER_ERROR,
                data: {},
            };
        }
        let deepCopyData = JSON.parse(JSON.stringify(responseObject.data));
        responseObject.data = (0, change_response_data_function_1.responseDataModifier)(deepCopyData);
        return res
            .status(responseObject === null || responseObject === void 0 ? void 0 : responseObject.statusCode)
            .json(responseObject);
    });
}
exports.ResponseFormatter = ResponseFormatter;
