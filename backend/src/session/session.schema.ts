import {
  Comment,
  Column,
  DataType,
  Model,
  Table,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import User from "../users/user.schema";
import { ISession } from "./session.interface";

@Table({ timestamps: true, paranoid: true, freezeTableName: true })
export default class Session extends Model<ISession> implements ISession {
  @Comment("آیدی نشست")
  @Column({
    primaryKey: true,
    autoIncrement: true,
    // type: DataType.,
    allowNull: false,
  })
  id: number;

  @Comment("آیدی نشست بالادست")
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  pid?: number;

  @Comment("نام نشست")
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Comment("توضیحات نشست")
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description?: string;

  @Comment("سازنده نشست")
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
