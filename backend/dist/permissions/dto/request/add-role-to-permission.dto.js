"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRoleToPermissionDto = void 0;
const express_validator_1 = require("express-validator");
exports.addRoleToPermissionDto = [
    (0, express_validator_1.body)("roleId").isInt().withMessage("شناسه نقش باید عدد باشد"),
    (0, express_validator_1.body)("permissionId").isInt().withMessage("شناسه دسترسی باید عدد باشد"),
];
