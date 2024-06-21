import { Router } from "express";
import { DataValidator } from "../shared/middlewares/data-validator.middleware";
import { ResponseFormatter } from "../shared/middlewares/response-formatter.middelware";
import { Authentication } from "../shared/middlewares/authentication.middleware";
import { Authorization } from "../shared/middlewares/authorization.middleware";
import { permissionPermissionsEnum } from "../seeder/enums/permission-permissions.enum";
import { sessionUserPermissionsEnum } from "../seeder/enums/sessionUser-permissions.enum";
import { AddUserToSessionDto } from "./dto/request/add-user-to-session.dto";
import { addUserToSession, removeUserFromSession } from "./sessionUser.service";
import { RemoveUserFromSessionDto } from "./dto/request/remove-user-from-session.dto";

const router = Router();

router.post(
  "/create",
  Authentication,
  Authorization(sessionUserPermissionsEnum.CREATE),
  AddUserToSessionDto,
  DataValidator,
  ResponseFormatter(addUserToSession)
);

router.delete(
  "/delete",
  Authentication,
  Authorization(sessionUserPermissionsEnum.REMOVE),
  RemoveUserFromSessionDto,
  DataValidator,
  ResponseFormatter(removeUserFromSession)
);

export default router;
