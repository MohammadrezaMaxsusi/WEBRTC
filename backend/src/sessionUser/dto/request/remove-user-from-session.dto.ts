import { body } from "express-validator";

export interface IRemoveUserFromSession {
  userId: number;
  sessionId: number;
}
export const RemoveUserFromSessionDto = [
  body("userId").isInt().withMessage("شناسه عددی کاربر دریافت نشد"),
  body("sessionId").isInt().withMessage("شناسه عددی نشست دریافت نشد"),
];
