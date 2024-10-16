import { writeFile, readFile } from "fs";

writeFile("info.txt", "Node.js is awesome!", (err) => {
  if (err) {
    return console.error(`Ошибка при записи в файл: ${err}`);
  }
  console.log("Текст был успешно записан в файл: info.txt");

  readFile("info.txt", "utf8", (err, data) => {
    if (err) {
      return console.error(`Ошибка при чтении файла: ${err}`);
    }
    console.log("Текст был прочтён: ", data);
  });
});
