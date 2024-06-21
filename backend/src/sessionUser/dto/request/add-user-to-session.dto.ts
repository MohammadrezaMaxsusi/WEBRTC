import { body } from "express-validator";

export interface IAddUserToSession {
  userId: number;
  sessionId: number;
}

export const AddUserToSessionDto = [
  body("userId").isInt().withMessage("شناسه عددی کاربر دریافت نشد"),
  body("sessionId").isInt().withMessage("شناسه عددی نشست دریافت نشد"),
];
