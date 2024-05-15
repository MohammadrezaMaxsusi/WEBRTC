import { IUserRole } from "./userRole.interface";
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
import User from "../users/user.schema";
@Table({ timestamps: true, paranoid: true, freezeTableName: true })
export default class UserRole extends Model<IUserRole> implements IUserRole {
  @Comment("آیدی دسترسی نقش")
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    allowNull: false,
  })
  id: number;

  @Comment("آیدی دسترسی نقش بالادست")
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  pid?: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Role)
  @Column
  roleId: number;
}
