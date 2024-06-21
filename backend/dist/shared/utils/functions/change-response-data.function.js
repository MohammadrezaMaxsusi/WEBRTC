"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseDataModifier = void 0;
const primaryTypes = ["string", "number", "boolean", "undefined"];
function responseDataModifier(data) {
    if (primaryTypes.includes(typeof data)) {
        return data;
    }
    if (Array.isArray(data)) {
        data = data.map((item) => responseDataModifier(item));
    }
    else {
        for (let key in data) {
            // FOR PRIMARY TYPES
            if (primaryTypes.includes(typeof data[key])) {
                if (key === "_id") {
                    data = renameId(data);
                }
                else if (key === "password") {
                    data = removePassword(data);
                }
            }
            // FOR ARRAY TYPES
            else if (Array.isArray(data[key])) {
                data[key] = responseDataModifier(data[key]);
            }
            // FOR OBJECT TYPES
            else if (typeof data[key] === "object") {
                data[key] = responseDataModifier(data[key]);
            }
        }
    }
    return data;
}
exports.responseDataModifier = responseDataModifier;
function renameId(data) {
    data.id = data._id;
    delete data._id;
    return data;
}
function removePassword(data) {
    delete data.password;
    return data;
}
