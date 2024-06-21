"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoleDto = void 0;
const express_validator_1 = require("express-validator");
exports.CreateRoleDto = [
    (0, express_validator_1.body)("name")
        .trim()
        .notEmpty()
        .withMessage("نام نقش نمی تواند خالی باشد")
        .isString()
        .withMessage("نام نقش باید رشته باشد")
        .toLowerCase(),
];
