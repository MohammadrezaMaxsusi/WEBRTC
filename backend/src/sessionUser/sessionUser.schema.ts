import {
  Comment,
  Column,
  DataType,
  Model,
  Table,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import Session from "../session/session.schema";
import User from "../users/user.schema";
import { ISessionUser } from "./sessionUser.interface";

@Table({ timestamps: true, paranoid: true, freezeTableName: true })
export default class SessionUser
  extends Model<ISessionUser>
  implements ISessionUser
{
  @Comment("آیدی رویداد نشست")
  @Column({
    primaryKey: true,
    autoIncrement: true,
    // type: DataType.,
    allowNull: false,
  })
  id: number;

  @Comment("آیدی بالادست")
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  pid?: number;

  @Comment("آیدی کاربر عضو نشست")
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @Comment("آیدی نشست")
  @ForeignKey(() => Session)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  sessionId: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Session)
  session: Session;
}
