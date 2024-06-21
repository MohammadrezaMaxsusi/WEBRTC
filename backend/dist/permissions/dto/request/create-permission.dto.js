"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePermissionDto = void 0;
const express_validator_1 = require("express-validator");
exports.CreatePermissionDto = [
    (0, express_validator_1.body)("name")
        .isString()
        .withMessage("نام دسترسی باید رشته باشد")
        .trim()
        .isLength({ max: 128 })
        .withMessage("طول نام حداکثر 128 کاراکتر می باشد"),
];
