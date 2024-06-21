import { query } from "express-validator";
import { listOptionsDto } from "../../shared/dtos/requests/list-options.dto";

export const FindRolesListDto = [...listOptionsDto];
