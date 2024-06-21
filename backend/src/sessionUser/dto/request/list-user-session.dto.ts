import { query } from "express-validator";
import {
  IListOptionsDto,
  listOptionsDto,
} from "../../../shared/dtos/requests/list-options.dto";

export interface IListUserSession extends IListOptionsDto {
  userId?: number;
  sessionId?: number;
}
export const ListUserSessionDto = [
  ...listOptionsDto,
  query("userId").optional().isInt().withMessage("شناسه عددی کاربر صحیح نیست"),
  query("sessionId")
    .optional()
    .isInt()
    .withMessage("شناسه عددی نشست صحیح نیست"),
];
