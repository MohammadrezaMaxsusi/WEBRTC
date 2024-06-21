"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSessionDto = void 0;
const express_validator_1 = require("express-validator");
exports.CreateSessionDto = [
    (0, express_validator_1.body)("name").isString().withMessage("نام نشست را وارد کنید"),
    (0, express_validator_1.body)("description")
        .optional()
        .isString()
        .withMessage("توضیحات نشست را وارد کنید"),
];
