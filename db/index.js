import { MongoClient } from "mongodb";
import "dotenv/config";

const mongoUri = process.env.MONGO_URI;

const connectDB = async () => {
  let client;
  try {
    client = new MongoClient(mongoUri);
    await client.connect();
    console.log("Вы были подключены к базе данных!");
    return client.db();
  } catch (err) {
    console.error("Ошибка при подключении к базе данных: " + err);
  }
};

export default connectDB;
