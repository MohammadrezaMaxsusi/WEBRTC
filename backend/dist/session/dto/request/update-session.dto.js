"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSessionDto = void 0;
const express_validator_1 = require("express-validator");
const param_id_dto_1 = require("../../../shared/dtos/requests/param-id.dto");
exports.UpdateSessionDto = [
    ...param_id_dto_1.ParamIdDto,
    (0, express_validator_1.body)("name").optional().isString().withMessage("نام نشست را وارد کنید"),
    (0, express_validator_1.body)("description")
        .optional()
        .isString()
        .withMessage("توضیحات نشست را وارد کنید"),
];
