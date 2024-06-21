"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckUserRolePermissionDto = void 0;
const express_validator_1 = require("express-validator");
exports.CheckUserRolePermissionDto = [
    (0, express_validator_1.query)("userId").isMongoId().withMessage("فرمت شناسه کاربر صحیح نیست"),
    (0, express_validator_1.query)("roleId").isMongoId().withMessage("فرمت شناسه نقش صحیح نیست"),
    (0, express_validator_1.query)("permissionId").isMongoId().withMessage("فرمت شناسه دسترسی صحیح نیست"),
];
