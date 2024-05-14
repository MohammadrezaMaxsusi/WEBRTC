import { Types } from "mongoose";
import { IBaseModel } from "../shared/base/model.base";
import { IRole } from "../roles/role.interface";

export interface IPermission extends IBaseModel {
  name: string;
  roles?: IRole[] | Types.ObjectId[];
}
