import { mkdir, rmdir } from "fs";
mkdir("myFolder", (err) => {
  if (err) {
    return console.error(`Ошибка при создании каталога: ${err.message}`);
  }
  console.log("Каталог myFolder был создан");
});

rmdir("myFolder", (err) => {
  if (err) {
    return console.error(`Ошибка при удалении каталога: ${err.message}`);
  }
  console.log("Каталог myFolder был удалён");
});
