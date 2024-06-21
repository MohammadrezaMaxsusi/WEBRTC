"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const session_schema_1 = __importDefault(require("../session/session.schema"));
const user_schema_1 = __importDefault(require("../users/user.schema"));
const event_statuses_enum_1 = require("./enums/event-statuses.enum");
let SessionEvent = class SessionEvent extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Comment)("آیدی رویداد نشست"),
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        // type: DataType.,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], SessionEvent.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Comment)("آیدی رویداد نشست بالادست"),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], SessionEvent.prototype, "pid", void 0);
__decorate([
    (0, sequelize_typescript_1.Comment)("رویداد پیش آمده در نشست"),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM(...Object.values(event_statuses_enum_1.sessionEventStatusEnum)),
        allowNull: true,
    }),
    __metadata("design:type", String)
], SessionEvent.prototype, "event", void 0);
__decorate([
    (0, sequelize_typescript_1.Comment)("آیدی صاحب رویداد نشست"),
    (0, sequelize_typescript_1.ForeignKey)(() => user_schema_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], SessionEvent.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.Comment)("آیدی نشست"),
    (0, sequelize_typescript_1.ForeignKey)(() => session_schema_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], SessionEvent.prototype, "sessionId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_schema_1.default),
    __metadata("design:type", user_schema_1.default)
], SessionEvent.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => session_schema_1.default),
    __metadata("design:type", session_schema_1.default)
], SessionEvent.prototype, "session", void 0);
SessionEvent = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: true, paranoid: true, freezeTableName: true })
], SessionEvent);
exports.default = SessionEvent;
