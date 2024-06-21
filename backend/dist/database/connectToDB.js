"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configurations_1 = require("../config/configurations");
const sequelize_typescript_1 = require("sequelize-typescript");
const path_1 = __importDefault(require("path"));
const user_schema_1 = __importDefault(require("../users/user.schema"));
const role_schema_1 = __importDefault(require("../roles/role.schema"));
const permissionRole_schema_1 = __importDefault(require("../permissionRole/permissionRole.schema"));
const permission_schema_1 = __importDefault(require("../permissions/permission.schema"));
const session_schema_1 = __importDefault(require("../session/session.schema"));
const userRole_schema_1 = __importDefault(require("../userRole/userRole.schema"));
const sessionEvent_schema_1 = __importDefault(require("../sessionEvent/sessionEvent.schema"));
const sessionUser_schema_1 = __importDefault(require("../sessionUser/sessionUser.schema"));
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
const { db } = configurations_1.configurations;
const sequelize = new sequelize_typescript_1.Sequelize({
    repositoryMode: true,
    database: db.name,
    host: db.host,
    port: db.port,
    dialect: "postgres",
    username: db.username,
    password: db.password,
    models: [path_1.default.join(__dirname, "..", "/**/*.schema.ts")],
});
sequelize.addModels([
    user_schema_1.default,
    role_schema_1.default,
    permissionRole_schema_1.default,
    permission_schema_1.default,
    session_schema_1.default,
    userRole_schema_1.default,
    sessionEvent_schema_1.default,
    sessionUser_schema_1.default,
]);
exports.default = sequelize;
