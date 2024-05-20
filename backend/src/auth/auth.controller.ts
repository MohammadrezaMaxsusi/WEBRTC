import { Router } from "express";
import { ResponseFormatter } from "../shared/middlewares/response-formatter.middelware";
import {
  loginWithUsernameAndPassword,
  registerWithUsernameAndPassword,
} from "./auth.service";
import { loginWithUsernameAndPasswordDto } from "./dto/login-with-password";
import { DataValidator } from "../shared/middlewares/data-validator.middleware";
import { registerWithUsernameAndPasswordDto } from "./dto/register";

const router = Router();

// Create new role
router.post(
  "/login",
  loginWithUsernameAndPasswordDto,
  DataValidator,
  ResponseFormatter(loginWithUsernameAndPassword)
);

// Create new role
router.post(
  "/register",
  registerWithUsernameAndPasswordDto,
  DataValidator,
  ResponseFormatter(registerWithUsernameAndPassword)
);

export default router;
