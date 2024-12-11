class Animal {
  public name: string;
  public species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  sound(): void {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  public breed: string;

  constructor(breed: string, name: string, species: string) {
    super(name, species);
    this.breed = breed;
  }
  sound(): void {
    console.log("The dog barks");
  }
}

const dog = new Dog("Bobik", "Дворняга", "Мяу мяу , гав гав, Roar Roar Gang");

console.log(dog);
//                                                 //Задача 2

class Library {
  static totalBooks: number = 0;

  static getAllBooks(): void {
    console.log(Library.totalBooks);
  }

  constructor() {}

  addBook(): void {
    Library.totalBooks++;
    console.log("Book has been added");
  }
}

const book1 = new Library();
const book2 = new Library();

book1.addBook();
book2.addBook();
Library.getAllBooks();

//                                                 //Задача 3

class Vehicle {
  public make: string;
  public model: string;
  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

class Motorcycle extends Vehicle {
  public type: string;

  constructor(make: string, model: string, type: string) {
    super(make, model);
    this.type = type;
  }
}

const motorcycle = new Motorcycle("AmongUs", "Bebracycle", "Quadrober");
console.log(motorcycle);
