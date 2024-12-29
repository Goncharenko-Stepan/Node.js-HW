//////////////////////////////// Задание 1 //////////////////////////////////

console.log("Задание 1");

const sumEvenNumbers = (numbers: number[]): number => {
  return numbers
    .filter((num: number) => num % 2 === 0)
    .reduce((sum: number, num: number) => sum + num, 0);
};

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));

//////////////////////////////// Задание 2 //////////////////////////////////

console.log("Задание 2");

interface StringToBooleanFunction {
  (input: string): boolean;
}

const isStringEmpty: StringToBooleanFunction = (input: string): boolean => {
  return input.trim().length === 0;
};

console.log(isStringEmpty("")); // true
console.log(isStringEmpty("Hello")); // false
console.log(isStringEmpty("   ")); // true

//////////////////////////////// Задание 3 //////////////////////////////////

console.log("Задание 3");

type CompareStrings = (str1: string, str2: string) => boolean;

const areStringsEqual: CompareStrings = (str1, str2) => {
  return str1 === str2;
};

console.log(areStringsEqual("Hello", "Hello")); // Вывод: true
console.log(areStringsEqual("Hello", "World")); // Вывод: false

//////////////////////////////// Задание 4 //////////////////////////////////

console.log("Задание 4");

function getLastElement<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[array.length - 1] : undefined;
}

// Пример использования
console.log(getLastElement([1, 2, 3, 4])); // Вывод: 4
console.log(getLastElement(["a", "b", "c"])); // Вывод: "c"
console.log(getLastElement([])); // Вывод: undefined

//////////////////////////////// Задание 5 //////////////////////////////////

console.log("Задание 5");

function makeTriple<T>(a: T, b: T, c: T): T[] {
  return [a, b, c];
}

console.log(makeTriple(1, 2, 3)); // Вывод: [1, 2, 3]
console.log(makeTriple("a", "b", "c")); // Вывод: ["a", "b", "c"]
console.log(makeTriple(true, false, true)); // Вывод: [true, false, true]
