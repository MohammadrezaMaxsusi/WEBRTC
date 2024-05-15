import { IPermission } from "./permission.interface";
import {
  Comment,
  Column,
  DataType,
  Model,
  Table,
  BelongsToMany,
} from "sequelize-typescript";
import Role from "../roles/role.schema";
import PermissionRole from "../permissionRole/permissionRole.schema";
@Table({ timestamps: true, paranoid: true, freezeTableName: true })
export default class Permission
  extends Model<IPermission>
  implements IPermission
{
  @Comment("آیدی دسترسی")
  @Column({
    primaryKey: true,
    autoIncrement: true,
    // type: DataType.INTEGER,
    allowNull: false,
  })
  id: number;

  @Comment("آیدی دسترسی بالادست")
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  pid?: number;

  @Comment("نام")
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @BelongsToMany(() => Role, () => PermissionRole)
  roles: Role[];
}
