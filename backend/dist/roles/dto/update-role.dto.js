"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoleDto = void 0;
const express_validator_1 = require("express-validator");
const param_id_dto_1 = require("../../shared/dtos/requests/param-id.dto");
exports.UpdateRoleDto = [
    ...param_id_dto_1.ParamIdDto,
    (0, express_validator_1.body)("name")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("نام نقش نمی تواند خالی باشد")
        .isString()
        .withMessage("نام نقش باید رشته باشد")
        .toLowerCase(),
];
