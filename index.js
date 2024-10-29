import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (_, res) => {
  try {
    res.send("Hello world.");
  } catch (err) {
    next(err);
  }
});

app.post("/", (req, res, next) => {
  try {
    const data = req.body;

    if (!data || Object.keys(data).length === 0) {
      return res.status(400).json({ error: "Данные не были отправлены" });
    }

    res.json({
      message: "Данные успешно получены!",
      receivedData: data,
    });
  } catch (err) {
    next(err);
  }
});
app.use((err, req, res, next) => {
  console.error("Ошибка:", err.message);
  res.status(500).json({
    error: "Что-то пошло не так на сервере.",
    details: err.message,
  });
});

app.listen(port, (err) => {
  err
    ? console.error(err)
    : console.log(`Server is running at http://127.0.0.1:${port}/`);
});
