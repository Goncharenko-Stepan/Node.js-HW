import "dotenv/config";
import mysql from "mysql2";

const { DB_HOSTNAME, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

const connection = mysql.createConnection({
  host: DB_HOSTNAME,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error("Ошибка подключения к базе данных:", err.message);
    return;
  }
  console.log("Подключение к базе данных успешно установлено.");
});

export default connection;
