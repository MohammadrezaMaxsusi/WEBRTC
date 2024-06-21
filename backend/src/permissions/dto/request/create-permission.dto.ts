import { body } from "express-validator";
import { isObjectIdOrHexString } from "mongoose";

export interface ICreatePermissionDto {
  name: string;
}
export const CreatePermissionDto = [
  body("name")
    .isString()
    .withMessage("نام دسترسی باید رشته باشد")
    .trim()
    .isLength({ max: 128 })
    .withMessage("طول نام حداکثر 128 کاراکتر می باشد"),
];
