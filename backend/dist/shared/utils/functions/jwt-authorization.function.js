"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtAuthorization = void 0;
const configurations_1 = require("../../../config/configurations");
const jsonwebtoken_1 = require("jsonwebtoken");
const jwtAuthorization = (req) => {
    var _a;
    const authorizationHeader = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization;
    const secret = configurations_1.configurations.jwt.secret;
    const token = authorizationHeader === null || authorizationHeader === void 0 ? void 0 : authorizationHeader.split("Bearer ")[1];
    try {
        const payload = (0, jsonwebtoken_1.verify)(token, secret);
        return {
            payload,
        };
    }
    catch (error) {
        return {
            error: true,
        };
    }
};
exports.jwtAuthorization = jwtAuthorization;
