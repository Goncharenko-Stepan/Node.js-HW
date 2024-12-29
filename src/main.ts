/////////////////////////////////////////// Задание 1 ///////////////////////////////////////////

type Admin = {
  name: string;
  permissions: string[];
}; // Тип админа

type User = {
  name: string;
  email: string;
}; // Тип юзера

type AdminUser = Admin & User; // Объедененный тип

const adminUser: AdminUser = {
  name: "John Doe",
  permissions: ["read", "write", "delete"],
  email: "john.doe@example.com",
}; // Константа объеденённого типа

console.log(adminUser);
/////////////////////////////////////////// Задание 2 ///////////////////////////////////////////

class Car {
  constructor(
    make: string,
    model: string,
    engine: { type: string; horsepower: number },
    year?: number
  ) {
    this.make = make;
    this.model = model;
    this.engine = engine;
    this.year = year;
  }

  make: string;
  model: string;
  engine: { type: string; horsepower: number };
  year?: number;

  displayInfo(): void {
    // Выводит информацию о машине
    console.log(`Car: ${this.make} ${this.model}`);
    console.log(
      `Engine: ${this.engine.type} with ${this.engine.horsepower} HP`
    );
    console.log(`Year: ${this.year ?? "Not specified"}`);
  }
}

// Пример использования
const engineInfo = {
  type: "V8",
  horsepower: 450,
};

const car = new Car("Ford", "Mustang", engineInfo, 2022);
car.displayInfo();

const carWithoutYear = new Car("Toyota", "Corolla", {
  type: "Inline-4",
  horsepower: 132,
});
carWithoutYear.displayInfo();

/////////////////////////////////////////// Задание 3 ///////////////////////////////////////////

interface Product {
  name: string;
  price: number;
}

function calculateDiscount(product: Product, discount: number): number {
  return product.price - (product.price * discount) / 100;
}
const product: Product = { name: "Laptop", price: 1000 };
console.log(calculateDiscount(product, 10));

/////////////////////////////////////////// Задание 4 ///////////////////////////////////////////
interface Employee {
  name: string;
  salary: number;
}

const employees: Employee[] = [
  { name: "Alice", salary: 5000 },
  { name: "Bob", salary: 6000 },
  { name: "Charlie", salary: 7000 },
];

function getSalaries(employees: Employee[]): number[] {
  return employees.map((employee) => employee.salary);
}

// Пример использования
console.log(getSalaries(employees)); // [5000, 6000, 7000]

/////////////////////////////////////////// Задание 5 ///////////////////////////////////////////
interface Person {
  firstName: string;
  lastName: string;
}

interface Student extends Person {
  grade: number;
}

const student: Student = {
  firstName: "John",
  lastName: "Doe",
  grade: 90,
};

function displayStudentInfo(student: Student): void {
  console.log(
    `Student: ${student.firstName} ${student.lastName}, Grade: ${student.grade}`
  );
}

// Пример использования
displayStudentInfo(student);

/////////////////////////////////////////// Задание 6 ///////////////////////////////////////////
interface ConcatStrings {
  (str1: string, str2: string): string;
}

const concatStrings: ConcatStrings = (str1, str2) => str1 + str2;

// Пример использования
console.log(concatStrings("Hello, ", "World!"));
