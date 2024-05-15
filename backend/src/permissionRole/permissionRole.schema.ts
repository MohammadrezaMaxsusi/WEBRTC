import { IPermissionRole } from "./permissionRole.interface";
import {
  Comment,
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
} from "sequelize-typescript";
import Permission from "../permissions/permission.schema";
import Role from "../roles/role.schema";
@Table({ timestamps: true, paranoid: true, freezeTableName: true })
export default class PermissionRole
  extends Model<IPermissionRole>
  implements IPermissionRole
{
  @Comment("آیدی دسترسی نقش")
  @Column({
    primaryKey: true,
    autoIncrement: true,
    // type: DataType.INTEGER,
    allowNull: false,
  })
  id: number;

  @Comment("آیدی دسترسی نقش بالادست")
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  pid?: number;

  @ForeignKey(() => Permission)
  @Column
  permissionId: number;

  @ForeignKey(() => Role)
  @Column
  roleId: number;
}
