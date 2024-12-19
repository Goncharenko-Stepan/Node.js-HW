namespace UserManagement {
  export namespace Admin {
    export class AdminUser {
      private name: string;
      private email: string;
      private isSuperAdmin: boolean;

      constructor(name: string, email: string, isSuperAdmin: boolean) {
        this.name = name;
        this.email = email;
        this.isSuperAdmin = isSuperAdmin;
      }

      public changeAccessRights(isSuperAdmin: boolean): void {
        this.isSuperAdmin = isSuperAdmin;
        console.log(
          `Access rights updated for ${this.name}. Is now super admin: ${this.isSuperAdmin}`
        );
      }

      public getInfo(): string {
        return `Name: ${this.name}, Email: ${this.email}, Is Super Admin: ${this.isSuperAdmin}`;
      }
    }
  }
}
