import { configurations } from "../config/configurations";
import { Sequelize } from "sequelize-typescript";
import path from "path";
import User from "../users/user.schema";
import Role from "../roles/role.schema";
import PermissionRole from "../permissionRole/permissionRole.schema";
import Permission from "../permissions/permission.schema";
import Session from "../session/session.schema";
import UserRole from "../userRole/userRole.schema";
import SessionEvent from "../sessionEvent/sessionEvent.schema";
import SessionUser from "../sessionUser/sessionUser.schema";

// try {
//   const mongoURI: string = configurations.db.uri;
//   await connect(mongoURI);
//   plugin(require("mongoose-autopopulate"));
//   console.log("MongoDB Connected...");
// } catch (err: any) {
//   console.error(err.message);
//   // Exit process with failure
//   process.exit(1);
// }

const { db } = configurations;

const sequelize = new Sequelize({
  repositoryMode: true,
  database: db.name,
  host: db.host,
  port: db.port,
  dialect: "postgres",
  username: db.username,
  password: db.password,
  models: [path.join(__dirname, "..", "/**/*.schema.ts")],
});

sequelize.addModels([
  User,
  Role,
  PermissionRole,
  Permission,
  Session,
  UserRole,
  SessionEvent,
  SessionUser,
]);

export default sequelize;
