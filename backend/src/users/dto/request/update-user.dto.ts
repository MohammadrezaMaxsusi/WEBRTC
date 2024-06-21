import { body } from "express-validator";
import { ParamIdDto } from "../../../shared/dtos/requests/param-id.dto";

export interface IUpdateUserDto {
  id: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

export const UpdateUserDto = [
  ...ParamIdDto,

  // TODO ADD REGEX FOR USERNAME
  body("username")
    .optional()
    .trim()
    .isString()
    .withMessage("نام کاربری باید رشته باشد")
    .isAlphanumeric("en-US")
    .withMessage("نام کاربری شامل حروف انگلیسی و اعداد می باشد")
    .isLength({ min: 4, max: 20 })
    .withMessage("حداقل طول نام کاربری ۴ و حداکثر ۲۰ کاراکتر می باشد")
    .toLowerCase(),

  body("firstName")
    .optional()
    .trim()
    .isString()
    .withMessage("نام باید رشته باشد")
    .isLength({ min: 3, max: 32 })
    .withMessage("حداقل طول نام 3 و حداکثر 32 کاراکتر می باشد"),

  body("lastName")
    .optional()
    .trim()
    .isString()
    .withMessage("نام خانوادگی باید رشته باشد")
    .isLength({ min: 3, max: 32 })
    .withMessage("حداقل طول نام خانوادگی 3 و حداکثر 32 کاراکتر می باشد"),

  body("email")
    .optional()
    .trim()
    .isEmail()
    .withMessage("فرمت ایمیل وارد شده معتبر نمیباشد"),
];
