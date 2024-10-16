// Создание и чтение текстового файла с использованием fs и dotenv
// 1.Создайте новый проект:
// ○В терминале перейдите в каталог, где хотите создать проект.
// ○Запустите команду `npm init -y`, чтобы создать файл `package.json`.
// 1.Установите dotenv:
// ○Выполните команду `npm install dotenv`.
// 1.Создайте файл `.env`:
// ○Создайте файл `.env` в корневом каталоге проекта.
// ○Добавьте строку `FILENAME=myfile.txt`, чтобы задать имя файла.
// 1.Создайте файл `file-operation.js`:
// ○Импортируйте модули `fs` и `dotenv`.
// ○Загрузите переменные окружения из файла `.env`.
// ○Создайте текстовый файл с именем, указанным в переменной окружения `FILENAME`, запишите в него любой текст. Прочитайте содержимое файла и выведите его в консоль.
// 1.Запустите скрипт командой `node file-operation.js`.

// ........................................................................Variant 1

// import dotenv from "dotenv/config";
// import { promises as fsPromises } from "fs";

// const fileName = process.env.FILENAME;

// fs.writeFile(fileName, "Hello world!", (err) => {
//   if (err) {
//     console.error("Error: " + err);
//     return;
//   }
//   console.log("Succes");
//   fs.readFile(fileName, "utf-8", (err, data) => {
//     if (err) {
//       console.error("Error: " + err);
//       return;
//     }
//     console.log("Succes read of data: " + data);
//   });
// });

// .......................................................................Variant 2

import dotenv from "dotenv/config";
import { promises as fsPromises } from "fs";

const fileName = process.env.FILENAME;

async function createRead() {
  try {
    await fsPromises.writeFile(fileName, "Hello world");
    console.log(fileName + "Has been created");
    const data = await fsPromises.readFile(fileName, "utf-8");
    console.log("File has been readed: " + data);
  } catch (err) {
    console.error(err + "Error of create file");
  }
}

createRead();
