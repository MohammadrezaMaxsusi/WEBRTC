import { Router } from "express";
import userController from "../users/user.controller";
import authContorller from "../auth/auth.controller";
const router = Router();

// Endpoints of authentication
router.use("/auth", authContorller);

// Endpoints of user entity
router.use("/users", userController);

// // Endpoints of role entity
// router.use("/roles", roleController);

// // Endpoints of permission entity
// router.use("/permissions", permissionController);

// // Endpoints of class entity
// router.use("/classes", classController);

// // Endpoints of class sessions entity
// router.use("/classes/sessions", classSessionController);

// // Endpoints of class log entity
// router.use("/classLogs", classLogController);

export default router;
