"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const response_formatter_middelware_1 = require("../shared/middlewares/response-formatter.middelware");
const auth_service_1 = require("./auth.service");
const login_with_password_1 = require("./dto/login-with-password");
const data_validator_middleware_1 = require("../shared/middlewares/data-validator.middleware");
const register_1 = require("./dto/register");
const router = (0, express_1.Router)();
// Create new role
router.post("/login", login_with_password_1.loginWithUsernameAndPasswordDto, data_validator_middleware_1.DataValidator, (0, response_formatter_middelware_1.ResponseFormatter)(auth_service_1.loginWithUsernameAndPassword));
// Create new role
router.post("/register", register_1.registerWithUsernameAndPasswordDto, data_validator_middleware_1.DataValidator, (0, response_formatter_middelware_1.ResponseFormatter)(auth_service_1.registerWithUsernameAndPassword));
exports.default = router;
