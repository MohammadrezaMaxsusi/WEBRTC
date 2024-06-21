import { body } from "express-validator";

export interface ICreateSession {
  name: string;
  description?: string;
}

export const CreateSessionDto = [
  body("name").isString().withMessage("نام نشست را وارد کنید"),
  body("description")
    .optional()
    .isString()
    .withMessage("توضیحات نشست را وارد کنید"),
];
