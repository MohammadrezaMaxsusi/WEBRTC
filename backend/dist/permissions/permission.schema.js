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
const role_schema_1 = __importDefault(require("../roles/role.schema"));
const permissionRole_schema_1 = __importDefault(require("../permissionRole/permissionRole.schema"));
let Permission = class Permission extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Comment)("آیدی دسترسی"),
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        autoIncrement: true,
        // type: DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Permission.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Comment)("آیدی دسترسی بالادست"),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], Permission.prototype, "pid", void 0);
__decorate([
    (0, sequelize_typescript_1.Comment)("نام"),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Permission.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => role_schema_1.default, () => permissionRole_schema_1.default),
    __metadata("design:type", Array)
], Permission.prototype, "roles", void 0);
Permission = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: true, paranoid: true, freezeTableName: true })
], Permission);
exports.default = Permission;
