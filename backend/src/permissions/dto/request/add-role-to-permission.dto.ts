import { body } from "express-validator";
import { isObjectIdOrHexString } from "mongoose";
import { listOptionsDto } from "../../../shared/dtos/requests/list-options.dto";

export interface IAddRoleToPermissionDto {
  roleId: number;
  permissionId: number;
}
export const addRoleToPermissionDto = [
  body("roleId").isInt().withMessage("شناسه نقش باید عدد باشد"),
  body("permissionId").isInt().withMessage("شناسه دسترسی باید عدد باشد"),
];
