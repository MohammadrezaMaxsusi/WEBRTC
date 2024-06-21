"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePermissionDto = void 0;
const express_validator_1 = require("express-validator");
const param_id_dto_1 = require("../../../shared/dtos/requests/param-id.dto");
exports.UpdatePermissionDto = [
    ...param_id_dto_1.ParamIdDto,
    (0, express_validator_1.body)("name")
        .isString()
        .withMessage("نام دسترسی باید رشته باشد")
        .trim()
        .isLength({ max: 128 })
        .withMessage("طول نام حداکثر 128 کاراکتر می باشد"),
];
