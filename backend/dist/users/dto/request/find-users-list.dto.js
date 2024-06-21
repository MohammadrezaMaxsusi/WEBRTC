"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUsersListDto = void 0;
const express_validator_1 = require("express-validator");
const list_options_dto_1 = require("../../../shared/dtos/requests/list-options.dto");
exports.FindUsersListDto = [
    (0, express_validator_1.query)("id").optional().isInt().withMessage("فرمت آیدی وارد شده صحیح نمیباشد"),
    // TODO ADD REGEX FOR USERNAME
    (0, express_validator_1.query)("username")
        .optional()
        .trim()
        .isString()
        .withMessage("نام کاربری باید رشته باشد")
        .isAlphanumeric("en-US")
        .withMessage("نام کاربری شامل حروف انگلیسی و اعداد می باشد")
        .withMessage("حداقل طول نام کاربری ۴ و حداکثر ۲۰ کاراکتر می باشد")
        .toLowerCase(),
    (0, express_validator_1.query)("firstName")
        .optional()
        .trim()
        .isString()
        .withMessage("نام باید رشته باشد")
        .withMessage("حداقل طول نام 3 و حداکثر 32 کاراکتر می باشد"),
    (0, express_validator_1.query)("lastName")
        .optional()
        .trim()
        .isString()
        .withMessage("نام خانوادگی باید رشته باشد")
        .withMessage("حداقل طول نام خانوادگی 3 و حداکثر 32 کاراکتر می باشد"),
    (0, express_validator_1.query)("email")
        .optional()
        .trim()
        .isEmail()
        .withMessage("فرمت ایمیل وارد شده معتبر نمیباشد"),
    ...list_options_dto_1.listOptionsDto,
];
