"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listOptionsDto = exports.listOptions = void 0;
const express_validator_1 = require("express-validator");
class listOptions {
}
exports.listOptions = listOptions;
listOptions.keys = ["sort", "asc", "limit", "page"];
exports.listOptionsDto = [
    (0, express_validator_1.query)("sort").optional().isString().trim(),
    (0, express_validator_1.query)("asc")
        .optional()
        .isBoolean()
        .withMessage("فقط میقادیر true و false مورد قبول می باشد"),
    (0, express_validator_1.query)("limit")
        .optional()
        .isInt({ min: 5, max: 100 })
        .withMessage("حداقل تعداد رکورد ۵ و حداکثر ۱۰۰ می باشد"),
    (0, express_validator_1.query)("page")
        .optional()
        .isInt({ min: 1 })
        .withMessage("حداقل صفحه معتبر ۱ می باشد"),
];
