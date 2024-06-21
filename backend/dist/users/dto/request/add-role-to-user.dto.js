"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRoleToUserDto = void 0;
const express_validator_1 = require("express-validator");
exports.AddRoleToUserDto = [
    (0, express_validator_1.body)("userId").isMongoId().withMessage("فرمت شناسه کاربر صحیح نیست"),
    (0, express_validator_1.body)("roleId").isMongoId().withMessage("فرمت شناسه نقش صحیح نیست"),
];
