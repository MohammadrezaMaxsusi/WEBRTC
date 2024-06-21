"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_validator_middleware_1 = require("../shared/middlewares/data-validator.middleware");
const response_formatter_middelware_1 = require("../shared/middlewares/response-formatter.middelware");
const create_permission_dto_1 = require("./dto/request/create-permission.dto");
const param_id_dto_1 = require("../shared/dtos/requests/param-id.dto");
const authentication_middleware_1 = require("../shared/middlewares/authentication.middleware");
const authorization_middleware_1 = require("../shared/middlewares/authorization.middleware");
const permission_permissions_enum_1 = require("../seeder/enums/permission-permissions.enum");
const permission_service_1 = require("./permission.service");
const list_permission_dto_1 = require("./dto/request/list-permission.dto");
const update_permission_dto_1 = require("./dto/request/update-permission.dto");
const add_role_to_permission_dto_1 = require("./dto/request/add-role-to-permission.dto");
const router = (0, express_1.Router)();
// Create new permission
router.post("/create", authentication_middleware_1.Authentication, (0, authorization_middleware_1.Authorization)(permission_permissions_enum_1.permissionPermissionsEnum.CREATE), create_permission_dto_1.CreatePermissionDto, data_validator_middleware_1.DataValidator, (0, response_formatter_middelware_1.ResponseFormatter)(permission_service_1.createPermission));
// Find permission list
router.get("/list", authentication_middleware_1.Authentication, (0, authorization_middleware_1.Authorization)(permission_permissions_enum_1.permissionPermissionsEnum.LIST), list_permission_dto_1.ListPermissionDto, data_validator_middleware_1.DataValidator, (0, response_formatter_middelware_1.ResponseFormatter)(permission_service_1.findAllPermissions));
// Find One permission
router.get("/byId/:id", authentication_middleware_1.Authentication, (0, authorization_middleware_1.Authorization)(permission_permissions_enum_1.permissionPermissionsEnum.FIND_ONE), param_id_dto_1.ParamIdDto, data_validator_middleware_1.DataValidator, (0, response_formatter_middelware_1.ResponseFormatter)(permission_service_1.findOnePermission));
// Find permission list
router.patch("/update/:id", authentication_middleware_1.Authentication, (0, authorization_middleware_1.Authorization)(permission_permissions_enum_1.permissionPermissionsEnum.UPDATE), update_permission_dto_1.UpdatePermissionDto, data_validator_middleware_1.DataValidator, (0, response_formatter_middelware_1.ResponseFormatter)(permission_service_1.updateOnePermission));
// Soft delete permission
router.delete("/delete/:id", authentication_middleware_1.Authentication, (0, authorization_middleware_1.Authorization)(permission_permissions_enum_1.permissionPermissionsEnum.DELETE), param_id_dto_1.ParamIdDto, data_validator_middleware_1.DataValidator, (0, response_formatter_middelware_1.ResponseFormatter)(permission_service_1.deleteOnePermission));
// // Hard delete permission
// router.delete(
//   "/delete/hard/:id",
//   Authentication,
//   Authorization(permissionPermissionsEnum.HARD_DELETE),
//   ParamIdDto,
//   DataValidator,
//   ResponseFormatter(hardDeleteOnePermission)
// );
// add new role to permission
router.post("/addRole", authentication_middleware_1.Authentication, (0, authorization_middleware_1.Authorization)(permission_permissions_enum_1.permissionPermissionsEnum.ADD_ROLE), add_role_to_permission_dto_1.addRoleToPermissionDto, data_validator_middleware_1.DataValidator, (0, response_formatter_middelware_1.ResponseFormatter)(permission_service_1.addRoleToPermission));
// remove role from permission
router.delete("/removeRole", authentication_middleware_1.Authentication, (0, authorization_middleware_1.Authorization)(permission_permissions_enum_1.permissionPermissionsEnum.REMOVE_ROLE), add_role_to_permission_dto_1.addRoleToPermissionDto, data_validator_middleware_1.DataValidator, (0, response_formatter_middelware_1.ResponseFormatter)(permission_service_1.removeRoleFromPermission));
// // check access specific role to permission
// router.get(
//   "/access-check",
//   Authentication,
//   Authorization(permissionPermissionsEnum.ACCESS_CHECK),
//   CheckAccessDto,
//   DataValidator,
//   ResponseFormatter(checkAccessRoleToPermission)
// );
exports.default = router;
