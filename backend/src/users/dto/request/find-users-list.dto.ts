import { query } from "express-validator";
import { listOptionsDto } from "../../../shared/dtos/requests/list-options.dto";

export interface IFindUsersListDto {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}
export const FindUsersListDto = [
  query("id").optional().isInt().withMessage("فرمت آیدی وارد شده صحیح نمیباشد"),

  // TODO ADD REGEX FOR USERNAME
  query("username")
    .optional()
    .trim()
    .isString()
    .withMessage("نام کاربری باید رشته باشد")
    .isAlphanumeric("en-US")
    .withMessage("نام کاربری شامل حروف انگلیسی و اعداد می باشد")
    .withMessage("حداقل طول نام کاربری ۴ و حداکثر ۲۰ کاراکتر می باشد")
    .toLowerCase(),

  query("firstName")
    .optional()
    .trim()
    .isString()
    .withMessage("نام باید رشته باشد")
    .withMessage("حداقل طول نام 3 و حداکثر 32 کاراکتر می باشد"),

  query("lastName")
    .optional()
    .trim()
    .isString()
    .withMessage("نام خانوادگی باید رشته باشد")
    .withMessage("حداقل طول نام خانوادگی 3 و حداکثر 32 کاراکتر می باشد"),

  query("email")
    .optional()
    .trim()
    .isEmail()
    .withMessage("فرمت ایمیل وارد شده معتبر نمیباشد"),

  ...listOptionsDto,
];
