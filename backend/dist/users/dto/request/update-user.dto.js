"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const express_validator_1 = require("express-validator");
const param_id_dto_1 = require("../../../shared/dtos/requests/param-id.dto");
exports.UpdateUserDto = [
    ...param_id_dto_1.ParamIdDto,
    // TODO ADD REGEX FOR USERNAME
    (0, express_validator_1.body)("username")
        .optional()
        .trim()
        .isString()
        .withMessage("نام کاربری باید رشته باشد")
        .isAlphanumeric("en-US")
        .withMessage("نام کاربری شامل حروف انگلیسی و اعداد می باشد")
        .isLength({ min: 4, max: 20 })
        .withMessage("حداقل طول نام کاربری ۴ و حداکثر ۲۰ کاراکتر می باشد")
        .toLowerCase(),
    (0, express_validator_1.body)("firstName")
        .optional()
        .trim()
        .isString()
        .withMessage("نام باید رشته باشد")
        .isLength({ min: 3, max: 32 })
        .withMessage("حداقل طول نام 3 و حداکثر 32 کاراکتر می باشد"),
    (0, express_validator_1.body)("lastName")
        .optional()
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
