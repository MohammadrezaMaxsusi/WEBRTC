"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleErrorMessages = exports.RoleSuccessMessages = void 0;
var RoleSuccessMessages;
(function (RoleSuccessMessages) {
    RoleSuccessMessages["CREATED"] = "\u0646\u0642\u0634 \u0627\u06CC\u062C\u0627\u062F \u0634\u062F";
    RoleSuccessMessages["FOUND"] = "\u0646\u0642\u0634 \u067E\u06CC\u062F\u0627 \u0634\u062F";
    RoleSuccessMessages["LISTED"] = "\u0644\u06CC\u0633\u062A \u0646\u0642\u0634 \u0647\u0627 \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F";
    RoleSuccessMessages["UPDATED"] = "\u0646\u0642\u0634 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0628\u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06CC \u0634\u062F";
    RoleSuccessMessages["DELETED"] = "\u0646\u0642\u0634 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u062D\u0630\u0641 \u0634\u062F";
})(RoleSuccessMessages || (exports.RoleSuccessMessages = RoleSuccessMessages = {}));
var RoleErrorMessages;
(function (RoleErrorMessages) {
    RoleErrorMessages["DUPLICATE"] = "\u0646\u0642\u0634 \u062A\u06A9\u0631\u0627\u0631\u06CC \u0627\u0633\u062A";
    RoleErrorMessages["NOT_FOUND"] = "\u0646\u0642\u0634 \u067E\u06CC\u062F\u0627 \u0646\u0634\u062F";
    RoleErrorMessages["FORBIDDEN_UPDATE_SUPER_ADMIN_ROLE"] = "\u062F\u0633\u062A\u0631\u0633\u06CC \u063A\u06CC\u0631 \u0645\u062C\u0627\u0632! \u0646\u0642\u0634 \u0627\u062F\u0645\u06CC\u0646 \u06A9\u0644 \u0642\u0627\u0628\u0644 \u0648\u06CC\u0631\u0627\u06CC\u0634 \u0646\u06CC\u0633\u062A";
    RoleErrorMessages["FORBIDDEN_DELETE_SUPER_ADMIN_ROLE"] = "\u062F\u0633\u062A\u0631\u0633\u06CC \u063A\u06CC\u0631 \u0645\u062C\u0627\u0632! \u0646\u0642\u0634 \u0627\u062F\u0645\u06CC\u0646 \u06A9\u0644 \u0642\u0627\u0628\u0644 \u062D\u0630\u0641 \u0646\u06CC\u0633\u062A";
})(RoleErrorMessages || (exports.RoleErrorMessages = RoleErrorMessages = {}));
