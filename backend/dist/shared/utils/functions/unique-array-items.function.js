"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueArray = void 0;
function uniqueArray(arr) {
    let uniqueSet = [...new Set([...arr])];
    return uniqueSet;
}
exports.uniqueArray = uniqueArray;
