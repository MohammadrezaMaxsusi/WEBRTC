import { body } from "express-validator";
import { isObjectIdOrHexString } from "mongoose";
import { listOptionsDto } from "../../../shared/dtos/requests/list-options.dto";

export interface IListPermissionDto {
  name: string;
}
export const ListPermissionDto = [...listOptionsDto];
