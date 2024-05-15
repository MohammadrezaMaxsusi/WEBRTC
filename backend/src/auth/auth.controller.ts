import { Router } from "express";
import { ResponseFormatter } from "../shared/middlewares/response-formatter.middelware";
import { loginWithUsernameAndPassword } from "./auth.service";
import { loginWithUsernameAndPasswordDto } from "./dto/login-with-password";
import { DataValidator } from "../shared/middlewares/data-validator.middleware";

const router = Router();

// Create new role
router.post(
  "/login",
  loginWithUsernameAndPasswordDto,
  DataValidator,
  ResponseFormatter(loginWithUsernameAndPassword)
);

export default router;
