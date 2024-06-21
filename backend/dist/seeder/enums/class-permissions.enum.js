"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classPermissionsEnum = void 0;
var classPermissionsEnum;
(function (classPermissionsEnum) {
    classPermissionsEnum["CREATE"] = "create-class";
    classPermissionsEnum["LIST"] = "list-class";
    classPermissionsEnum["FIND_ONE"] = "findOne-class";
    classPermissionsEnum["UPDATE"] = "update-class";
    classPermissionsEnum["DELETE"] = "delete-class";
    classPermissionsEnum["ADD_ADMIN"] = "addAdmin-class";
    classPermissionsEnum["REMOVE_ADMIN"] = "removeAdmin-class";
    classPermissionsEnum["ADD_MEMBER"] = "addMember-class";
    classPermissionsEnum["REMOVE_MEMBER"] = "removeMember-class";
    classPermissionsEnum["HARD_DELETE"] = "hardDelete-class";
    classPermissionsEnum["PROCEED_PENDING"] = "proceedPending-class";
})(classPermissionsEnum || (exports.classPermissionsEnum = classPermissionsEnum = {}));
