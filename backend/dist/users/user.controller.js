"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dto/request/create-user.dto");
const data_validator_middleware_1 = require("../shared/middlewares/data-validator.middleware");
const response_formatter_middelware_1 = require("../shared/middlewares/response-formatter.middelware");
const find_users_list_dto_1 = require("./dto/request/find-users-list.dto");
const update_user_dto_1 = require("./dto/request/update-user.dto");
const param_id_dto_1 = require("../shared/dtos/requests/param-id.dto");
const user_permissions_enum_1 = require("../seeder/enums/user-permissions.enum");
const authentication_middleware_1 = require("../shared/middlewares/authentication.middleware");
const authorization_middleware_1 = require("../shared/middlewares/authorization.middleware");
const router = (0, express_1.Router)();
// Create new user
router.post("/create", authentication_middleware_1.Authentication, (0, authorization_middleware_1.Authorization)(user_permissions_enum_1.userPermissionsEnum.CREATE), create_user_dto_1.CreateUserDto, data_validator_middleware_1.DataValidator, (0, response_formatter_middelware_1.ResponseFormatter)(user_service_1.createUser));
// Find user list
router.get("/list", authentication_middleware_1.Authentication, (0, authorization_middleware_1.Authorization)(user_permissions_enum_1.userPermissionsEnum.LIST), find_users_list_dto_1.FindUsersListDto, data_validator_middleware_1.DataValidator, (0, response_formatter_middelware_1.ResponseFormatter)(user_service_1.findAllUsers));
// Find One user
router.get("/byId/:id", authentication_middleware_1.Authentication, (0, authorization_middleware_1.Authorization)(user_permissions_enum_1.userPermissionsEnum.FIND_ONE), param_id_dto_1.ParamIdDto, data_validator_middleware_1.DataValidator, (0, response_formatter_middelware_1.ResponseFormatter)(user_service_1.findOneUser));
// Update user
router.patch("/update/:id", authentication_middleware_1.Authentication, (0, authorization_middleware_1.Authorization)(user_permissions_enum_1.userPermissionsEnum.UPDATE), update_user_dto_1.UpdateUserDto, data_validator_middleware_1.DataValidator, (0, response_formatter_middelware_1.ResponseFormatter)(user_service_1.updateOneUser));
// Delete user
router.delete("/delete/:id", authentication_middleware_1.Authentication, (0, authorization_middleware_1.Authorization)(user_permissions_enum_1.userPermissionsEnum.DELETE), param_id_dto_1.ParamIdDto, data_validator_middleware_1.DataValidator, (0, response_formatter_middelware_1.ResponseFormatter)(user_service_1.deleteOneUser));
// // Hard Delete specific role
// router.delete(
//   "/delete/hard/:id",
//   Authentication,
//   Authorization(userPermissionsEnum.HARD_DELETE),
//   ParamIdDto,
//   DataValidator,
//   ResponseFormatter(hardDeleteOneUser)
// );
// // check access of a user by a role and a permission
// router.get(
//   "/access-check",
//   Authentication,
//   Authorization(userPermissionsEnum.ACCESS_CHECK),
//   CheckUserRolePermissionDto,
//   DataValidator,
//   ResponseFormatter(checkUserWithRoleAndPermission)
// );
// // add role to user
// router.post(
//   "/addRole",
//   Authentication,
//   Authorization(userPermissionsEnum.ADD_ROLE),
//   AddRoleToUserDto,
//   DataValidator,
//   ResponseFormatter(addRole)
// );
// // reomev role from user
// router.delete(
//   "/removeRole",
//   Authentication,
//   Authorization(userPermissionsEnum.REMOVE_ROLE),
//   RemoveRoleFromUserDto,
//   DataValidator,
//   ResponseFormatter(removeRole)
// );
// // get user's self info
// router.get(
//   "/myself",
//   Authentication,
//   // Authorization(userPermissionsEnum.REMOVE_ROLE),
//   // RemoveRoleFromUserDto,
//   // DataValidator,
//   ResponseFormatter(getMyselfInfo)
// );
exports.default = router;
