"use strict";
var UserManagement;
(function (UserManagement) {
    let Admin;
    (function (Admin) {
        class AdminUser {
            constructor(name, email, isSuperAdmin) {
                this.name = name;
                this.email = email;
                this.isSuperAdmin = isSuperAdmin;
            }
            changeAccessRights(isSuperAdmin) {
                this.isSuperAdmin = isSuperAdmin;
                console.log(`Access rights updated for ${this.name}. Is now super admin: ${this.isSuperAdmin}`);
            }
            getInfo() {
                return `Name: ${this.name}, Email: ${this.email}, Is Super Admin: ${this.isSuperAdmin}`;
            }
        }
        Admin.AdminUser = AdminUser;
    })(Admin = UserManagement.Admin || (UserManagement.Admin = {}));
})(UserManagement || (UserManagement = {}));
