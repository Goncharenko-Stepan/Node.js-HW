// Задание 1

const promise1: Promise<string> = new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

const promise2: Promise<string> = new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 2000);
});

const promise3: Promise<string> = new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 3000);
});

async function processPromises() {
  try {
    const result1 = await promise1;
    console.log(result1);
    const result2 = await promise2;
    console.log(result2);
    const result3 = await promise3;
    console.log(result3);
  } catch (error) {
    console.error("Error:", error);
  }
}

processPromises();

// Задание 2

async function main(arr: string[]): Promise<void> {
  try {
    const results = await Promise.all(
      arr.map(async (str) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return str.toUpperCase();
      })
    );
    console.log(results);
  } catch (error) {
    console.error("Error:", error);
  }
}

const array = ["apple", "banana", "cherry"];

main(array);

// Задание 3

async function handleParallelPromises() {
  const promise1: Promise<string> = Promise.resolve("Результат 1");
  const promise2: Promise<string> = Promise.reject("Ошибка в промисе 2");
  const promise3: Promise<string> = Promise.resolve("Результат 3");

  try {
    const results = await Promise.all([promise1, promise2, promise3]);
    console.log("Результаты всех промисов:", results);
  } catch (error) {
    console.error("Произошла ошибка при выполнении промисов:", error);
  }
}

handleParallelPromises();

// Задание 4

function processArrayAsync(arr: number[]): Promise<number[]> {
  return Promise.all(
    arr.map(async (num) => {
      await new Promise((resolve) => setTimeout(resolve, num));
      return num;
    })
  );
}

const arr = [1000, 2000, 3000];

processArrayAsync(arr)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
