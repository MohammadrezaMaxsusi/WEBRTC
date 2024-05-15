import { body } from "express-validator";

export interface ILoginWithUsernameAndPassword {
  username: string;
  password: string;
}
export const loginWithUsernameAndPasswordDto = [
  body("username")
    .isString()
    .withMessage("نام کاربری از نوع رشته می باشد")
    .isLength({ max: 128 })
    .withMessage("حداکثر طول نام کاربری 128 می باشد"),
  body("password")
    .isString()
    .withMessage("گذرواژه از نوع رشته می باشد")
    .isLength({ max: 128 })
    .withMessage("حداکثر طول گذرواژه 128 می باشد"),
];
