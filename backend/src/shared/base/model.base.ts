import { Types } from "mongoose";

export interface IBaseModel {
  id: number;
  pid?: number;
  createdAt?: number;
  updatedAt?: number;
  deletedAt?: number;
}
