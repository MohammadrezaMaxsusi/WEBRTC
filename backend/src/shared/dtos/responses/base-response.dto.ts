import { IBaseModel } from "../../base/model.base";

export class BaseResponseDto {
  id: number;
  createdAt: number;
  updatedAt: number;
  deletedAt?: number;
  pid?: string;

  constructor(initial: IBaseModel) {
    this.id = initial.id;
    this.createdAt = initial.createdAt;
    this.updatedAt = initial.updatedAt;
    this.deletedAt = initial?.deletedAt;
    this.pid = initial?.pid?.toString();
  }
}
