"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPermissionsEnum = void 0;
var userPermissionsEnum;
(function (userPermissionsEnum) {
    userPermissionsEnum["CREATE"] = "create-user";
    userPermissionsEnum["LIST"] = "list-user";
    userPermissionsEnum["FIND_ONE"] = "findOne-user";
    userPermissionsEnum["UPDATE"] = "update-user";
    userPermissionsEnum["DELETE"] = "delete-user";
    userPermissionsEnum["ACCESS_CHECK"] = "accessCheck-user";
    userPermissionsEnum["ADD_ROLE"] = "addRole-user";
    userPermissionsEnum["REMOVE_ROLE"] = "removeRole-user";
    userPermissionsEnum["HARD_DELETE"] = "hardDelete-user";
})(userPermissionsEnum || (exports.userPermissionsEnum = userPermissionsEnum = {}));
