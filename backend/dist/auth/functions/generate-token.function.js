"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const configurations_1 = require("../../config/configurations");
const generateJWT = (data) => {
    const { userId, roleIds } = data;
    const { accessTtl, refreshTtl, secret } = configurations_1.configurations.jwt;
    const accessToken = jsonwebtoken_1.default.sign({
        userId,
        roleIds,
    }, secret, {
        expiresIn: accessTtl,
    });
    const refreshToken = jsonwebtoken_1.default.sign({
        userId,
        roleIds,
    }, secret, {
        expiresIn: refreshTtl,
    });
    return {
        access: accessToken,
        refresh: refreshToken,
    };
};
exports.generateJWT = generateJWT;
