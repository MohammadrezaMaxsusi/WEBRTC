"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserToSessionDto = void 0;
const express_validator_1 = require("express-validator");
exports.AddUserToSessionDto = [
    (0, express_validator_1.body)("userId").isInt().withMessage("شناسه عددی کاربر دریافت نشد"),
    (0, express_validator_1.body)("sessionId").isInt().withMessage("شناسه عددی نشست دریافت نشد"),
];
