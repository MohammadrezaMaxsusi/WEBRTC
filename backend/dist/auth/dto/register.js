"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerWithUsernameAndPasswordDto = void 0;
const express_validator_1 = require("express-validator");
exports.registerWithUsernameAndPasswordDto = [
    (0, express_validator_1.body)("firstName")
        .trim()
        .isString()
        .withMessage("نام خود را وارد کنید")
        .isLength({ min: 2, max: 64 })
        .withMessage("حداقل طول نام 2 و حداکثر 64 می باشد"),
    (0, express_validator_1.body)("lastName")
        .trim()
        .isString()
        .withMessage("نام خانوادگی خود را وارد کنید")
        .isLength({ min: 2, max: 64 })
        .withMessage("حداقل طول نام خانوادگی 2 و حداکثر 64 می باشد"),
    (0, express_validator_1.body)("username")
        .trim()
        .isString()
        .withMessage("نام کاربری از نوع رشته می باشد")
        .isLength({ min: 3, max: 128 })
        .withMessage("حداقل طول نام کاربری 3 و حداکثر 128 می باشد"),
    (0, express_validator_1.body)("password")
        .isString()
        .withMessage("گذرواژه از نوع رشته می باشد")
        .isLength({ min: 6, max: 128 })
        .withMessage("حداقل  طول گذرواژه 6 و حداکثر 128 می باشد"),
];
