"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_validator_middleware_1 = require("../shared/middlewares/data-validator.middleware");
const response_formatter_middelware_1 = require("../shared/middlewares/response-formatter.middelware");
const authentication_middleware_1 = require("../shared/middlewares/authentication.middleware");
const authorization_middleware_1 = require("../shared/middlewares/authorization.middleware");
const sessionUser_permissions_enum_1 = require("../seeder/enums/sessionUser-permissions.enum");
const add_user_to_session_dto_1 = require("./dto/request/add-user-to-session.dto");
const sessionUser_service_1 = require("./sessionUser.service");
const router = (0, express_1.Router)();
// Create new permission
router.post("/create", authentication_middleware_1.Authentication, (0, authorization_middleware_1.Authorization)(sessionUser_permissions_enum_1.sessionUserPermissionsEnum.CREATE), add_user_to_session_dto_1.AddUserToSessionDto, data_validator_middleware_1.DataValidator, (0, response_formatter_middelware_1.ResponseFormatter)(sessionUser_service_1.addUserToSession));
exports.default = router;
