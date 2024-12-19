//                           //Задание 1
// import { capitalize, reverseString } from "./stringUtils";

// const str1: string = "hello world";
// const str2: string = "TypeScript";

// console.log(capitalize(str1));
// console.log(reverseString(str2));

//                           //Задание 2

// import Finance from "./finance";

// const loanCalculator = new Finance.LoanCalculator(100000, 10, 5);
// console.log(
//   "loanCalculator.calculateMonthlyPayment(): ",
//   loanCalculator.calculateMonthlyPayment()
// ); // 2124.02

// const taxCalculator = new Finance.TaxCalculator(60000);
// console.log("taxCalculator.calculateTax(): ", taxCalculator.calculateTax()); // 6500

//                           //Задание 3

// import { AdminUser } from "./userManagement.ts";

// const admin = new UserManagement.Admin.AdminUser(
//   "John Doe",
//   "bebra228228@gmail.com",
//   false
// );

// console.log(admin.getInfo());
// admin.changeAccessRights(true);
// console.log(admin.getInfo());

//                       //Я не знаю как правильно импортировать пространсвта имён

//                           //Задание 4

import { generateFibonacci, generatePrimeNumbers } from "./sequenceUtils";

// Test the generateFibonacci function
const fibonacciLimit = 50;
console.log(`Fibonacci sequence up to ${fibonacciLimit}:`);
console.log(generateFibonacci(fibonacciLimit));

// Test the generatePrimeNumbers function
const primeLimit = 50;
console.log(`Prime numbers up to ${primeLimit}:`);
console.log(generatePrimeNumbers(primeLimit));
