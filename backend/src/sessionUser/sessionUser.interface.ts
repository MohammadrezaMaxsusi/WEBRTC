import { IBaseModel } from "../shared/base/model.base";

export interface ISessionUser extends IBaseModel {
  sessionId: number;
  userId: number;
}
