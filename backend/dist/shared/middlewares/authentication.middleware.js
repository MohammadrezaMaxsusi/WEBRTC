"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authentication = void 0;
const http_status_1 = __importDefault(require("http-status"));
const auth_messages_enum_1 = require("../../auth/enums/auth-messages.enum");
const jwt_authorization_function_1 = require("../utils/functions/jwt-authorization.function");
const Authentication = (req, res, next) => {
    const { payload, error } = (0, jwt_authorization_function_1.jwtAuthorization)(req);
    if (error) {
        return res.status(http_status_1.default.UNAUTHORIZED).json({
            statusCode: http_status_1.default.UNAUTHORIZED,
            message: auth_messages_enum_1.AuthErrorMessages.UNAUTHORIZED,
            error: true,
            data: {},
        });
    }
    req.payload = payload;
    next();
};
exports.Authentication = Authentication;
