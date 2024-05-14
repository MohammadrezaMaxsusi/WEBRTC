import { Model } from "mongoose";
import { BaseRepository } from "../shared/base/repository.base";
import { IRole } from "./role.interface";

export class RoleRepository extends BaseRepository<IRole> {
  constructor(private readonly roleModel: Model<IRole>) {
    super(roleModel);
  }
}
