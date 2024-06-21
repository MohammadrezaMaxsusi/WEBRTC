"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.baseSchema = {
    pid: {
        type: mongoose_1.default.Types.ObjectId,
        required: false,
    },
    createdAt: {
        type: Number,
        default: Date.now,
        required: true,
    },
    updatedAt: {
        type: Number,
        default: Date.now,
        required: true,
    },
    deletedAt: {
        type: Number,
        required: false,
    },
};
