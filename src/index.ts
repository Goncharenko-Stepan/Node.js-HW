//                                             //Задание 1

// // Создаём класс Animal
// abstract class Animal {
//   abstract makeSound(): string;
// }
// // Создаём класс Dog
// class Dog extends Animal {
//   makeSound(): string {
//     return "Гав-гав";
//   }
// }

// // Создаём класс Cat
// class Cat extends Animal {
//   makeSound(): string {
//     return "Мяв-мяв";
//   }
// }
// //
// const animals: Animal[] = [new Dog(), new Cat()];

// animals.forEach((animal) => {
//   console.log(animal.makeSound());
// });

//                                             //Задание 2

// abstract class Shape {
//   public abstract name: string;

//   abstract calculateArea(): number;
// }

// abstract class ColoredShape extends Shape {
//   public abstract color: string;
//   abstract getColorAndNameOfShape(): string;
// }

// // туц туц туц туц туц

// class ColoredCircle extends ColoredShape {
//   constructor(
//     public radius: number,
//     public name: string,
//     public color: string
//   ) {
//     super();
//   }

//   calculateArea(): number {
//     return Math.PI * Math.pow(this.radius, 2);
//   }

//   getColorAndNameOfShape(): string {
//     return `Name: ${this.name}, color: ${this.color}`;
//   }
// }

// // туц туц туц туц туц

// class ColoredRectangle extends ColoredShape {
//   constructor(
//     public width: number,
//     public height: number,
//     public name: string,
//     public color: string
//   ) {
//     super();
//   }
//   calculateArea(): number {
//     // Сейчас будем реализовывать метод calculateArea
//     return this.width * this.height;
//   }

//   getColorAndNameOfShape(): string {
//     return `Name: ${this.name}, color: ${this.color}`;
//   }
// }

// const shapes: ColoredShape[] = [
//   new ColoredRectangle(20, 10, "Rectangle", "red"),
//   new ColoredCircle(10, "Circle", "green"),
// ];
// // туц туц туц туц туц

// shapes.forEach((shape) => {
//   console.log(shape.calculateArea());
//   console.log(shape.getColorAndNameOfShape());
// });

//                                             //Задание 3

// abstract class Appliance {
//   abstract turnOn(): void;
//   abstract turnOff(): void;
// }

// class WashingMachine extends Appliance {
//   turnOn(): void {
//     console.log("Стиральная машина включена");
//   }
//   turnOff(): void {
//     console.log("Стиральная машина выключена");
//   }
// }
// class Refrigerator extends Appliance {
//   turnOn(): void {
//     console.log("Холодильник включен");
//   }
//   turnOff(): void {
//     console.log("Холодильник выключен");
//   }
// }

// const appliances: Appliance[] = [new WashingMachine(), new Refrigerator()];

// appliances.forEach((appliance) => {
//   appliance.turnOn();
//   appliance.turnOff();
// });

//                                             //Задание 4

// abstract class Account {
//   protected balance: number;

//   constructor(balance: number) {
//     this.balance = balance;
//   }

//   abstract deposit(amount: number): void;
//   abstract withdraw(amount: number): void;

//   getBalance(): number {
//     return this.balance;
//   }
// }

// class SavingsAccount extends Account {
//   private interestRate: number;

//   constructor(balance: number, interestRate: number) {
//     super(balance);
//     this.interestRate = interestRate;
//   }

//   deposit(amount: number): void {
//     this.balance += amount;
//   }

//   withdraw(amount: number): void {
//     if (amount <= this.balance) {
//       this.balance -= amount;
//     }
//   }

//   applyInterest(): void {
//     this.balance += this.balance * this.interestRate;
//   }
// }

// class CheckingAccount extends Account {
//   private fee: number;

//   constructor(balance: number, fee: number) {
//     super(balance);
//     this.fee = fee;
//   }

//   deposit(amount: number): void {
//     this.balance += amount;
//   }

//   withdraw(amount: number): void {
//     if (amount + this.fee <= this.balance) {
//       this.balance -= amount + this.fee;
//     }
//   }
// }

// const savings = new SavingsAccount(1000, 0.05);
// savings.deposit(500);
// savings.applyInterest();
// savings.withdraw(200);

// const checking = new CheckingAccount(1000, 5);
// checking.deposit(300);
// checking.withdraw(200);

// console.log(`Savings Account Balance: ${savings.getBalance()}`);
// console.log(`Checking Account Balance: ${checking.getBalance()}`);

//                                             //Задание 5
// abstract class Media {
//   abstract play(): void;
// }

// class Audio extends Media {
//   play(): void {
//     console.log("Playing audio");
//   }
// }

// class Video extends Media {
//   play(): void {
//     console.log("Playing video");
//   }
// }

// const mediaItems: Media[] = [new Audio(), new Video()];

// mediaItems.forEach((item) => {
//   item.play();
// });
