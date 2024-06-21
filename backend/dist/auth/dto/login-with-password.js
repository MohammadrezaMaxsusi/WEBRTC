"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginWithUsernameAndPasswordDto = void 0;
const express_validator_1 = require("express-validator");
exports.loginWithUsernameAndPasswordDto = [
    (0, express_validator_1.body)("username")
        .isString()
        .withMessage("نام کاربری از نوع رشته می باشد")
        .isLength({ max: 128 })
        .withMessage("حداکثر طول نام کاربری 128 می باشد"),
    (0, express_validator_1.body)("password")
        .isString()
        .withMessage("گذرواژه از نوع رشته می باشد")
        .isLength({ max: 128 })
        .withMessage("حداکثر طول گذرواژه 128 می باشد"),
];
