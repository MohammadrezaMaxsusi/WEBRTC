import { IBaseModel } from "../shared/base/model.base";

export interface ISessionEvent extends IBaseModel {
  sessionId: number;
  userId: number;
  event: "join" | "left" | "kick";
}
