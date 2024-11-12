import express from "express";
import "dotenv/config";
import { Book } from "./models/book.js";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Your app is working");
});

app.get("/books", async (_req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Не удалось получить список книг" });
  }
});

app.post("/books", async (req, res) => {
  try {
    const { title, author, year } = req.body;

    const newBook = await Book.create({
      title,
      author,
      year,
    });
    res.status(201).json(newBook);
  } catch (err) {
    console.error("Error:" + err);
    res.status(500).json({ error: "Не удалось создать запись" });
  }
});

app.put("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, year } = req.body;

    const [updatedRows] = await Book.update(
      { title, author, year },
      { where: { id } }
    );

    if (updatedRows === 0) {
      return res.status(404).json({ error: "Книга с указанным ID не найдена" });
    }

    res.status(200).json({ message: "Запись успешно обновлена" });
  } catch (err) {
    console.error("Error:" + err);
    res.status(500).json({ error: "Не удалось обновить запись" });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRows = await Book.destroy({ where: { id } });

    if (deletedRows === 0) {
      return res.status(404).json({ error: "Книга с указанным ID не найдена" });
    }

    res.status(200).json({ message: "Запись успешно удалена" });
  } catch (err) {
    console.error("Error:" + err);
    res.status(500).json({ error: "Не удалось удалить запись" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
