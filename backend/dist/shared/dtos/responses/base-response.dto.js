"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseResponseDto = void 0;
class BaseResponseDto {
    constructor(initial) {
        var _a;
        this.id = initial.id;
        this.createdAt = initial.createdAt;
        this.updatedAt = initial.updatedAt;
        this.deletedAt = initial === null || initial === void 0 ? void 0 : initial.deletedAt;
        this.pid = (_a = initial === null || initial === void 0 ? void 0 : initial.pid) === null || _a === void 0 ? void 0 : _a.toString();
    }
}
exports.BaseResponseDto = BaseResponseDto;
