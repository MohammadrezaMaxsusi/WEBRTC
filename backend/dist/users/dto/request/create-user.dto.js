"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const express_validator_1 = require("express-validator");
exports.CreateUserDto = [
    // TODO ADD REGEX FOR USERNAME
    (0, express_validator_1.body)("username")
        .trim()
        .isString()
        .withMessage("نام کاربری باید رشته باشد")
        .isAlphanumeric("en-US")
        .withMessage("نام کاربری شامل حروف انگلیسی و اعداد می باشد")
        .isLength({ min: 4, max: 20 })
        .withMessage("حداقل طول نام کاربری ۴ و حداکثر ۲۰ کاراکتر می باشد")
        .toLowerCase(),
    (0, express_validator_1.body)("password")
        .isString()
        .withMessage("رمز عبور باید رشته باشد")
        .isLength({ min: 8, max: 32 })
        .withMessage("حداقل طول رمز عبور باید ۸ کاراکتر باشد"),
    // .isStrongPassword({
    //   minLowercase: 1,
    //   minUppercase: 1,
    //   minSymbols: 1,
    // })
    // .withMessage('رمز عبور باید شامل حروف بزرگ و کوچک انگلیسی و نماد ها باشد')
    (0, express_validator_1.body)("firstName")
        .trim()
        .isString()
        .withMessage("نام باید رشته باشد")
        .isLength({ min: 3, max: 32 })
        .withMessage("حداقل طول نام 3 و حداکثر 32 کاراکتر می باشد"),
    (0, express_validator_1.body)("lastName")
        .trim()
        .isString()
        .withMessage("نام خانوادگی باید رشته باشد")
        .isLength({ min: 3, max: 32 })
        .withMessage("حداقل طول نام خانوادگی 3 و حداکثر 32 کاراکتر می باشد"),
    (0, express_validator_1.body)("email")
        .optional()
        .trim()
        .isEmail()
        .withMessage("فرمت ایمیل وارد شده معتبر نمیباشد"),
];
