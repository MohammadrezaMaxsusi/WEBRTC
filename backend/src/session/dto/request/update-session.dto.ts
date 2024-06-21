import { body } from "express-validator";
import { ParamIdDto } from "../../../shared/dtos/requests/param-id.dto";

export interface IUpdateSession {
  id: number;
  name?: string;
  description?: string;
}

export const UpdateSessionDto = [
  ...ParamIdDto,
  body("name").optional().isString().withMessage("نام نشست را وارد کنید"),
  body("description")
    .optional()
    .isString()
    .withMessage("توضیحات نشست را وارد کنید"),
];
