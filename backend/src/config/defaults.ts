import { IConfig } from "./config.interface";

export const defaults: IConfig = {
  app: {
    name: "APP-NAME",
    port: 3000,
    superAdmin: { username: "super_admin", password: "meetingAppPassword" },
  },
  db: {
    host: "localhost",
    name: "chat-app",
    port: 5432,
    username: "postgres",
    password: "2122",
  },
  jwt: {
    secret: "simple-secret",
    accessTtl: "1d",
    refreshTtl: "7d",
  },
};
