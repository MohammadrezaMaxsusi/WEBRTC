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
import { sessionEventStatusEnum } from "./enums/event-statuses.enum";
import { ISessionEvent } from "./sessionEvent.interface";

@Table({ timestamps: true, paranoid: true, freezeTableName: true })
export default class SessionEvent
  extends Model<ISessionEvent>
  implements ISessionEvent
{
  @Comment("آیدی رویداد نشست")
  @Column({
    primaryKey: true,
    autoIncrement: true,
    // type: DataType.,
    allowNull: false,
  })
  id: number;

  @Comment("آیدی رویداد نشست بالادست")
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  pid?: number;

  @Comment("رویداد پیش آمده در نشست")
  @Column({
    type: DataType.ENUM(...Object.values(sessionEventStatusEnum)),
    allowNull: true,
  })
  event: "join" | "left" | "kick";

  @Comment("آیدی صاحب رویداد نشست")
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
