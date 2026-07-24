"use strict";
var userRole;
(function (userRole) {
    userRole["Admin"] = "superadmin";
    userRole["Moderator"] = "moderator";
    userRole["Viewer"] = "viewer";
})(userRole || (userRole = {}));
function canEdit(role) {
    if (role === userRole.Viewer) {
        return false;
    }
    else {
        console.log(role);
        return true;
    }
}
canEdit(userRole.Viewer);
