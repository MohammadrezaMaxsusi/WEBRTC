"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configurations = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const defaults_1 = require("./defaults");
dotenv_1.default.config();
exports.configurations = {
    app: {
        name: process.env.APP_NAME || defaults_1.defaults.app.name,
        port: Number(process.env.APP_PORT) || defaults_1.defaults.app.port,
        superAdmin: {
            username: process.env.SUPER_ADMIN_USERNAME || defaults_1.defaults.app.superAdmin.username,
            password: process.env.SUPER_ADMIN_PASSWORD || defaults_1.defaults.app.superAdmin.password,
        },
    },
    db: {
        host: process.env.DB_HOST || defaults_1.defaults.db.host,
        name: process.env.DB_NAME || defaults_1.defaults.db.name,
        port: Number(process.env.DB_PORT) || defaults_1.defaults.db.port,
        username: process.env.DB_USERNAME || defaults_1.defaults.db.username,
        password: process.env.DB_PASSWORD || defaults_1.defaults.db.password,
    },
    jwt: {
        secret: process.env.JWT_SECRET || defaults_1.defaults.jwt.secret,
        accessTtl: process.env.JWT_ACCESSTTL || defaults_1.defaults.jwt.accessTtl,
        refreshTtl: process.env.JWT_REFRESHTTL || defaults_1.defaults.jwt.refreshTtl,
    },
};
