import { Types } from "mongoose";
import { IBaseModel } from "../shared/base/model.base";

export interface IUser extends IBaseModel {
  username: string;
  firstName?: string;
  lastName?: string;
  password: string;
  email?: string;
}
