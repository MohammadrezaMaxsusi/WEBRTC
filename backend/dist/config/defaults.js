"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaults = void 0;
exports.defaults = {
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
