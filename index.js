import express from "express";
import dotenv from "dotenv";
import connection from "./db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (_, res, next) => {
  try {
    res.send("Hello world.");
  } catch (err) {
    next(err);
  }
});

app.get("/products", (req, res, next) => {
  const query = `SELECT * FROM products;`;
  connection.query(query, (err, result) => {
    if (err) {
      const error = new Error("Error fetching products");
      next(error);
      return;
    }
    res.json(result);
  });
});

app.post("/products", (req, res, next) => {
  const { name, price } = req.body;
  if (name && price) {
    const query = `INSERT INTO products (name, price) VALUES (?, ?)`;
    connection.query(query, [name, price], (err, result) => {
      if (err) {
        const error = new Error("Error fetching products");
        next(error);
        return;
      }
      res.status(201).json({
        message: "Product has been add",
      });
    });
  } else {
    const error = new Error("You dont write name and price");
    res.status(400).json({
      message: "You dont write name and price",
    });
    next(error);
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
