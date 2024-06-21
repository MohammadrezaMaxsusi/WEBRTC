import { param } from "express-validator";
import { Types } from "mongoose";

export interface IParamIdDto {
  id: number;
}

export const ParamIdDto = [
  param("id").isInt().withMessage("فرمت آیدی وارد شده صحیح نمیباشد"),
];
