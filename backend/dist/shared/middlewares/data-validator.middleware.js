"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataValidator = void 0;
const express_validator_1 = require("express-validator");
const lodash_1 = __importDefault(require("lodash"));
const http_status_1 = __importDefault(require("http-status"));
const DataValidator = (req, res, next) => {
    let responseObject;
    const result = (0, express_validator_1.validationResult)(req);
    if (!result.isEmpty()) {
        const firstError = lodash_1.default.pick(result.array({ onlyFirstError: true })[0], [
            "path",
            "msg",
        ]);
        responseObject = {
            statusCode: http_status_1.default.BAD_REQUEST,
            message: firstError.msg,
            data: lodash_1.default.omit(firstError, ["msg"]),
            error: true,
            // errorDetail:
        };
        return res.status(responseObject.statusCode).json(responseObject);
    }
    req = whiteListIncomingData(req);
    return next();
};
exports.DataValidator = DataValidator;
function whiteListIncomingData(req) {
    var _a;
    const keys = [];
    if ((_a = req["express-validator#contexts"]) === null || _a === void 0 ? void 0 : _a.length) {
        for (let item of req["express-validator#contexts"]) {
            keys.push(item.fields[0]);
        }
    }
    req.data = lodash_1.default.pick(req.data, keys);
    return req;
}
