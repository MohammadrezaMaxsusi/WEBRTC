"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserSessionDto = void 0;
const express_validator_1 = require("express-validator");
const list_options_dto_1 = require("../../../shared/dtos/requests/list-options.dto");
exports.ListUserSessionDto = [
    ...list_options_dto_1.listOptionsDto,
    (0, express_validator_1.query)("userId").optional().isInt().withMessage("شناسه عددی کاربر صحیح نیست"),
    (0, express_validator_1.query)("sessionId")
        .optional()
        .isInt()
        .withMessage("شناسه عددی نشست صحیح نیست"),
];
