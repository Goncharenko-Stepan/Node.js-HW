"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//                           //Задание 1
const stringUtils_1 = require("./stringUtils");
const str1 = "hello world";
const str2 = "TypeScript";
console.log((0, stringUtils_1.capitalize)(str1));
console.log((0, stringUtils_1.reverseString)(str2));
//                           //Задание 2
const finance_1 = __importDefault(require("./finance"));
const loanCalculator = new finance_1.default.LoanCalculator(100000, 10, 5);
console.log("loanCalculator.calculateMonthlyPayment(): ", loanCalculator.calculateMonthlyPayment()); // 2124.02
const taxCalculator = new finance_1.default.TaxCalculator(60000);
console.log("taxCalculator.calculateTax(): ", taxCalculator.calculateTax()); // 6500
//                           //Задание 3
/// <reference path="./userManagement.ts" />
const admin = new UserManagement.Admin.AdminUser("John Doe", "bebra228228@gmail.com", false);
console.log(admin.getInfo());
admin.changeAccessRights(true);
console.log(admin.getInfo());
