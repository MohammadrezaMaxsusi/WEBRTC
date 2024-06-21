"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_role_dto_1 = require("./dto/create-role.dto");
const response_formatter_middelware_1 = require("../shared/middlewares/response-formatter.middelware");
const role_service_1 = require("./role.service");
const find_roles_list_dto_1 = require("./dto/find-roles-list.dto");
const param_id_dto_1 = require("../shared/dtos/requests/param-id.dto");
const update_role_dto_1 = require("./dto/update-role.dto");
const data_validator_middleware_1 = require("../shared/middlewares/data-validator.middleware");
const authentication_middleware_1 = require("../shared/middlewares/authentication.middleware");
const authorization_middleware_1 = require("../shared/middlewares/authorization.middleware");
const role_permissions_enum_1 = require("../seeder/enums/role-permissions.enum");
const router = (0, express_1.Router)();
// Create new role
router.post("/create", authentication_middleware_1.Authentication, (0, authorization_middleware_1.Authorization)(role_permissions_enum_1.rolePermissionsEnum.CREATE), create_role_dto_1.CreateRoleDto, data_validator_middleware_1.DataValidator, (0, response_formatter_middelware_1.ResponseFormatter)(role_service_1.createRole));
// Find roles list
router.get("/list", authentication_middleware_1.Authentication, (0, authorization_middleware_1.Authorization)(role_permissions_enum_1.rolePermissionsEnum.LIST), find_roles_list_dto_1.FindRolesListDto, data_validator_middleware_1.DataValidator, (0, response_formatter_middelware_1.ResponseFormatter)(role_service_1.findAllRoles));
// Find specific role
router.get("/byId/:id", authentication_middleware_1.Authentication, (0, authorization_middleware_1.Authorization)(role_permissions_enum_1.rolePermissionsEnum.FIND_ONE), param_id_dto_1.ParamIdDto, data_validator_middleware_1.DataValidator, (0, response_formatter_middelware_1.ResponseFormatter)(role_service_1.findOneRole));
// Update specific role
router.patch("/update/:id", authentication_middleware_1.Authentication, (0, authorization_middleware_1.Authorization)(role_permissions_enum_1.rolePermissionsEnum.UPDATE), update_role_dto_1.UpdateRoleDto, data_validator_middleware_1.DataValidator, (0, response_formatter_middelware_1.ResponseFormatter)(role_service_1.updateOneRole));
// Delete specific role
router.delete("/delete/:id", authentication_middleware_1.Authentication, (0, authorization_middleware_1.Authorization)(role_permissions_enum_1.rolePermissionsEnum.DELETE), param_id_dto_1.ParamIdDto, data_validator_middleware_1.DataValidator, (0, response_formatter_middelware_1.ResponseFormatter)(role_service_1.deleteOneRole));
// // Hard Delete specific role
// router.delete(
//   "/delete/hard/:id",
//   Authentication,
//   Authorization(rolePermissionsEnum.HARD_DELETE),
//   ParamIdDto,
//   DataValidator,
//   ResponseFormatter(hardDeleteOneRole)
// );
// // Get role permissions
// router.get(
//   "/get-permissions/:id",
//   Authentication,
//   Authorization(rolePermissionsEnum.GET_PERMISSIONS),
//   ParamIdDto,
//   DataValidator,
//   ResponseFormatter(getPermissions)
// );
exports.default = router;
