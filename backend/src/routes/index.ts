import { Router } from "express";
import userController from "../users/user.controller";
import authContorller from "../auth/auth.controller";
import permissionController from "../permissions/permission.controller";
import roleController from "../roles/role.controller";
import sessionController from "../session/session.controller";
import sessionUsersController from "../sessionUser/sessionUser.controller";

const router = Router();

router.use("/auth", authContorller);

router.use("/users", userController);

router.use("/roles", roleController);

router.use("/permissions", permissionController);

router.use("/sessions", sessionController);

router.use("/sessionUsers", sessionUsersController);

export default router;
