import { IBaseModel } from "../shared/base/model.base";

export interface IPermissionRole extends IBaseModel {
  permissionId: number;
  roleId: number;
}
