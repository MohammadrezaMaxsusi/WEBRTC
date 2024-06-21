"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIsoDate = void 0;
function isIsoDate(str) {
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str))
        return false;
    const d = new Date(str);
    return d instanceof Date && !isNaN(d.getTime()) && d.toISOString() === str; // valid date
}
exports.isIsoDate = isIsoDate;
