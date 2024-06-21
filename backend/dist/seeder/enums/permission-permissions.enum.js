"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissionPermissionsEnum = void 0;
var permissionPermissionsEnum;
(function (permissionPermissionsEnum) {
    permissionPermissionsEnum["CREATE"] = "create-permission";
    permissionPermissionsEnum["LIST"] = "list-permission";
    permissionPermissionsEnum["FIND_ONE"] = "findOne-permission";
    permissionPermissionsEnum["UPDATE"] = "update-permission";
    permissionPermissionsEnum["DELETE"] = "delete-permission";
    permissionPermissionsEnum["ADD_ROLE"] = "addRole-permission";
    permissionPermissionsEnum["REMOVE_ROLE"] = "removeRole-permission";
    permissionPermissionsEnum["ACCESS_CHECK"] = "accessCheck-permission";
    permissionPermissionsEnum["HARD_DELETE"] = "hardDelete-permission";
})(permissionPermissionsEnum || (exports.permissionPermissionsEnum = permissionPermissionsEnum = {}));
