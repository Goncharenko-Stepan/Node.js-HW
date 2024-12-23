import mongoose from "mongoose";
import "dotenv/config";

const mongoUri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("Подключено к базе данных");
  } catch (err) {
    console.error("Ошибка при подключении к базе данных:", err);
    process.exit(1);
  }
};

export default connectDB;
