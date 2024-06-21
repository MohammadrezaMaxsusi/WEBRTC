import { body } from "express-validator";
import { isObjectIdOrHexString } from "mongoose";
import { ParamIdDto } from "../../../shared/dtos/requests/param-id.dto";

export interface IUpdatePermissionDto {
  id: number;
  name: string;
}
export const UpdatePermissionDto = [
  ...ParamIdDto,
  body("name")
    .isString()
    .withMessage("نام دسترسی باید رشته باشد")
    .trim()
    .isLength({ max: 128 })
    .withMessage("طول نام حداکثر 128 کاراکتر می باشد"),
];
