import { query } from "express-validator";

export class listOptions {
  static keys = ["sort", "asc", "limit", "page"];

  sort?: string;

  asc?: boolean;

  limit?: number;

  page?: number;

  // searchKey?: string;

  // searchValue?: string;
}

export interface IListOptionsDto {
  sort?: string;
  asc?: boolean;
  limit?: number;
  page?: number;
}
export const listOptionsDto = [
  query("sort").optional().isString().trim(),
  query("asc")
    .optional()
    .isBoolean()
    .withMessage("فقط میقادیر true و false مورد قبول می باشد"),
  query("limit")
    .optional()
    .isInt({ min: 5, max: 100 })
    .withMessage("حداقل تعداد رکورد ۵ و حداکثر ۱۰۰ می باشد"),
  query("page")
    .optional()
    .isInt({ min: 1 })
    .withMessage("حداقل صفحه معتبر ۱ می باشد"),
];
