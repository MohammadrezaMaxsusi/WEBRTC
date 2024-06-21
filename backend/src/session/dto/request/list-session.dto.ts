import { body } from "express-validator";
import { listOptionsDto } from "../../../shared/dtos/requests/list-options.dto";
import { ParamIdDto } from "../../../shared/dtos/requests/param-id.dto";

export interface IListSession {
  id: number;
  name?: string;
  description?: string;
}

export const ListSessionDto = [...listOptionsDto];
