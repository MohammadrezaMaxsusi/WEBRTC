import { IBaseModel } from "../shared/base/model.base";

export interface ISession extends IBaseModel {
  name: string;
  description?: string;
  userId: number;
}
