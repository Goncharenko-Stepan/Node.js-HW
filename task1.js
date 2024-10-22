import { mkdir, rmdir } from "fs/promises";

async function manageDirectory() {
  try {
    await mkdir("myFolder");
    console.log("Каталог myFolder был создан");
    await rmdir("myFolder");
    console.log("Каталог myFolder был удалён");
  } catch (err) {
    console.error(`Ошибка: ${err.message}`);
  }
}

manageDirectory();
