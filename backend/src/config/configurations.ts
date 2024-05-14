import dotenv from "dotenv";
import { IConfig } from "./config.interface";
import { defaults } from "./defaults";

dotenv.config();

export const configurations: IConfig = {
  app: {
    name: process.env.APP_NAME || defaults.app.name,
    port: Number(process.env.APP_PORT) || defaults.app.port,
    superAdmin: {
      username:
        process.env.SUPER_ADMIN_USERNAME || defaults.app.superAdmin.username,
      password:
        process.env.SUPER_ADMIN_PASSWORD || defaults.app.superAdmin.password,
    },
  },
  db: {
    host: process.env.DB_HOST || defaults.db.host,
    name: process.env.DB_NAME || defaults.db.name,
    port: Number(process.env.DB_PORT) || defaults.db.port,
    username: process.env.DB_USERNAME || defaults.db.username,
    password: process.env.DB_PASSWORD || defaults.db.password,
  },
  jwt: {
    secret: process.env.JWT_SECRET || defaults.jwt.secret,
    accessTtl: process.env.JWT_ACCESSTTL || defaults.jwt.accessTtl,
    refreshTtl: process.env.JWT_REFRESHTTL || defaults.jwt.refreshTtl,
  },
};
