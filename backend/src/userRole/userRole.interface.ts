import { IBaseModel } from "../shared/base/model.base";

export interface IUserRole extends IBaseModel {
  userId: number;
  roleId: number;
}
