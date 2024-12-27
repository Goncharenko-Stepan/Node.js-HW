import express from "express";
import "dotenv/config";
import connectDB from "./db/index.js";
import { Server } from "socket.io";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const startServer = async () => {
  try {
    await connectDB();

    const server = http.createServer(app);
    const io = new Server(server);

    io.on("connection", (socket) => {
      console.log("Новый пользователь подключился");

      socket.on("message", (msg) => {
        console.log(`Сообщение от клиента: ${msg}`);
        socket.emit("confirmation", "Сообщение получено сервером");
      });

      socket.on("disconnect", () => {
        console.log("Пользователь отключился");
      });
    });

    app.post("/send-message", (req, res) => {
      const { message } = req.body;
      console.log("Получено сообщение:", message);
      res.status(200).json({ confirmation: "Сообщение получено сервером" });
    });

    server.listen(PORT, () => {
      console.log(`Сервер запущен на http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Ошибка при запуске сервера: " + error);
    process.exit(1);
  }
};

startServer();
