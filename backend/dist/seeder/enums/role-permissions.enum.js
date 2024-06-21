"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolePermissionsEnum = void 0;
var rolePermissionsEnum;
(function (rolePermissionsEnum) {
    rolePermissionsEnum["CREATE"] = "create-role";
    rolePermissionsEnum["LIST"] = "list-role";
    rolePermissionsEnum["FIND_ONE"] = "findOne-role";
    rolePermissionsEnum["UPDATE"] = "update-role";
    rolePermissionsEnum["DELETE"] = "delete-role";
    rolePermissionsEnum["GET_PERMISSIONS"] = "get-permissions-role";
    rolePermissionsEnum["HARD_DELETE"] = "hardDelete-role";
})(rolePermissionsEnum || (exports.rolePermissionsEnum = rolePermissionsEnum = {}));
