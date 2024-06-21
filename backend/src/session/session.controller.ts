import { Router } from "express";
import { sessionPermissionsEnum } from "../seeder/enums/session-permissions.enum";
import { ParamIdDto } from "../shared/dtos/requests/param-id.dto";
import { Authentication } from "../shared/middlewares/authentication.middleware";
import { Authorization } from "../shared/middlewares/authorization.middleware";
import { DataValidator } from "../shared/middlewares/data-validator.middleware";
import { ResponseFormatter } from "../shared/middlewares/response-formatter.middelware";
import { CreateSessionDto } from "./dto/request/create-session.dto";
import { ListSessionDto } from "./dto/request/list-session.dto";
import { UpdateSessionDto } from "./dto/request/update-session.dto";
import {
  createSession,
  deleteSession,
  findAllSessions,
  findOneSession,
  updateSession,
} from "./session.service";

const router = Router();

router.post(
  "/create",
  Authentication,
  Authorization(sessionPermissionsEnum.CREATE),
  CreateSessionDto,
  DataValidator,
  ResponseFormatter(createSession)
);

router.patch(
  "/update/:id",
  Authentication,
  Authorization(sessionPermissionsEnum.UPDATE),
  UpdateSessionDto,
  DataValidator,
  ResponseFormatter(updateSession)
);

router.get(
  "/byId/:id",
  Authentication,
  Authorization(sessionPermissionsEnum.FIND_ONE),
  ParamIdDto,
  DataValidator,
  ResponseFormatter(findOneSession)
);

router.get(
  "/list",
  Authentication,
  Authorization(sessionPermissionsEnum.LIST),
  ListSessionDto,
  DataValidator,
  ResponseFormatter(findAllSessions)
);

router.delete(
  "/delete/:id",
  Authentication,
  Authorization(sessionPermissionsEnum.DELETE),
  ParamIdDto,
  DataValidator,
  ResponseFormatter(deleteSession)
);

export default router;
