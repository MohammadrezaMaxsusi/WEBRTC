import { IUser } from "./user.interface";
import {
  BelongsToMany,
  Column,
  Comment,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import Role from "../roles/role.schema";
import UserRole from "../userRole/userRole.schema";

@Table({ timestamps: true, paranoid: true, freezeTableName: true })
export default class User extends Model<IUser> implements IUser {
  @Comment("آیدی کاربر")
  @Column({
    primaryKey: true,
    autoIncrement: true,
    // type: DataType.INTEGER,
    allowNull: false,
  })
  id: number;

  @Comment("آیدی کاربر بالادست")
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  pid?: number;

  @Comment("ایمیل کاربر")
  @Column({ type: DataType.STRING, allowNull: true })
  email: string;

  @Comment("نام کاربری")
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: "username-unique-index",
  })
  username: string;

  @Comment("نام")
  @Column({ type: DataType.STRING, allowNull: false })
  firstName: string;

  @Comment("نام خانوادگی")
  @Column({ type: DataType.STRING, allowNull: false })
  lastName: string;

  @Comment("رمز عبور")
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[];
}
