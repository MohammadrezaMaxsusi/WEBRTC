import { Router } from "express";
import { DataValidator } from "../shared/middlewares/data-validator.middleware";
import { ResponseFormatter } from "../shared/middlewares/response-formatter.middelware";
import { CreatePermissionDto } from "./dto/request/create-permission.dto";
import { ParamIdDto } from "../shared/dtos/requests/param-id.dto";
import { Authentication } from "../shared/middlewares/authentication.middleware";
import { Authorization } from "../shared/middlewares/authorization.middleware";
import { permissionPermissionsEnum } from "../seeder/enums/permission-permissions.enum";
import {
  addRoleToPermission,
  createPermission,
  deleteOnePermission,
  findAllPermissions,
  findOnePermission,
  removeRoleFromPermission,
  updateOnePermission,
} from "./permission.service";
import { ListPermissionDto } from "./dto/request/list-permission.dto";
import { UpdatePermissionDto } from "./dto/request/update-permission.dto";
import { addRoleToPermissionDto } from "./dto/request/add-role-to-permission.dto";

const router = Router();

// Create new permission
router.post(
  "/create",
  Authentication,
  Authorization(permissionPermissionsEnum.CREATE),
  CreatePermissionDto,
  DataValidator,
  ResponseFormatter(createPermission)
);

// Find permission list
router.get(
  "/list",
  Authentication,
  Authorization(permissionPermissionsEnum.LIST),
  ListPermissionDto,
  DataValidator,
  ResponseFormatter(findAllPermissions)
);

// Find One permission
router.get(
  "/byId/:id",
  Authentication,
  Authorization(permissionPermissionsEnum.FIND_ONE),
  ParamIdDto,
  DataValidator,
  ResponseFormatter(findOnePermission)
);

// Find permission list
router.patch(
  "/update/:id",
  Authentication,
  Authorization(permissionPermissionsEnum.UPDATE),
  UpdatePermissionDto,
  DataValidator,
  ResponseFormatter(updateOnePermission)
);

// Soft delete permission
router.delete(
  "/delete/:id",
  Authentication,
  Authorization(permissionPermissionsEnum.DELETE),
  ParamIdDto,
  DataValidator,
  ResponseFormatter(deleteOnePermission)
);

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
router.post(
  "/addRole",
  Authentication,
  Authorization(permissionPermissionsEnum.ADD_ROLE),
  addRoleToPermissionDto,
  DataValidator,
  ResponseFormatter(addRoleToPermission)
);

// remove role from permission
router.delete(
  "/removeRole",
  Authentication,
  Authorization(permissionPermissionsEnum.REMOVE_ROLE),
  addRoleToPermissionDto,
  DataValidator,
  ResponseFormatter(removeRoleFromPermission)
);

// // check access specific role to permission
// router.get(
//   "/access-check",
//   Authentication,
//   Authorization(permissionPermissionsEnum.ACCESS_CHECK),
//   CheckAccessDto,
//   DataValidator,
//   ResponseFormatter(checkAccessRoleToPermission)
// );

export default router;
