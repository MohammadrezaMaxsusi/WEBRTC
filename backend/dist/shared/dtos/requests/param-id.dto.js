"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamIdDto = void 0;
const express_validator_1 = require("express-validator");
exports.ParamIdDto = [
    (0, express_validator_1.param)("id").isInt().withMessage("فرمت آیدی وارد شده صحیح نمیباشد"),
];
