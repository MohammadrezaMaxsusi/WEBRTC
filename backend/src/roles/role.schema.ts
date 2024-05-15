import { IRole } from "./role.interface";
import {
  Comment,
  Column,
  DataType,
  Model,
  Table,
  BelongsToMany,
} from "sequelize-typescript";
import Permission from "../permissions/permission.schema";
import PermissionRole from "../permissionRole/permissionRole.schema";
import User from "../users/user.schema";
import UserRole from "../userRole/userRole.schema";
import sequelize from "../database/connectToDB";
@Table({ timestamps: true, paranoid: true, freezeTableName: true })
export default class Role extends Model<IRole> implements IRole {
  @Comment("آیدی نقش")
  @Column({
    primaryKey: true,
    autoIncrement: true,
    // type: DataType.,
    allowNull: false,
  })
  id: number;

  @Comment("آیدی نقش بالادست")
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  pid?: number;

  @Comment("نام")
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @BelongsToMany(() => Permission, () => PermissionRole)
  permissions: Permission[];

  @BelongsToMany(() => User, () => UserRole)
  users: User[];
}
