import express from "express";
import "dotenv/config";
import { MongoClient, ObjectId } from "mongodb";

const app = express();
const PORT = process.env.PORT || 3000;
let db;

app.use(express.json());

const connectDB = async () => {
  try {
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    db = client.db();
    console.log("Подключено к базе данных");
  } catch (err) {
    console.error("Ошибка при подключении к базе данных", err);
    process.exit(1);
  }
};

connectDB();

// GET /products
app.get("/products", async (_, res) => {
  try {
    const products = await db.collection("products").find({}).toArray();
    res.status(200).json(products);
  } catch (err) {
    console.error("Ошибка при получении списка продуктов:", err);
    res.status(500).json({
      message: "Ошибка при получении списка продуктов",
      error: err.message,
    });
  }
});

// GET /products/:id
app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id) });

    if (!product) {
      return res.status(404).json({ message: "Продукт не найден" });
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({
      message: "Ошибка при получении продукта",
      error: err.message,
    });
  }
});

// POST /products
app.post("/products", async (req, res) => {
  try {
    const { name, price, description } = req.body;
    if (!name || !price || !description) {
      return res.status(400).json({ message: "Вы не заполнили все поля!" });
    }

    const newProduct = {
      name,
      price: parseFloat(price),
      description,
      createdAt: new Date(),
    };

    const result = await db.collection("products").insertOne(newProduct);

    res.status(201).json({
      message: "Продукт успешно создан",
      product: result.ops ? result.ops[0] : newProduct,
    });
  } catch (err) {
    res.status(500).json({
      message: "Ошибка при создании продукта",
      error: err.message,
    });
  }
});

// PUT /products/:id
app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description } = req.body;

    const updatedProduct = await db.collection("products").findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { name, price, description } },
      { returnDocument: "after" } // Исправлено на returnDocument
    );

    if (!updatedProduct.value) {
      return res.status(404).json({ message: "Продукт не найден" });
    }

    res.status(200).json(updatedProduct.value);
  } catch (err) {
    res.status(500).json({
      message: "Ошибка при обновлении продукта",
      error: err.message,
    });
  }
});

// DELETE /products/:id
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db
      .collection("products")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Продукт не найден" });
    }

    res.status(200).json({ message: "Продукт успешно удален" });
  } catch (err) {
    res.status(500).json({
      message: "Ошибка при удалении продукта",
      error: err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту localhost:${PORT}`);
});
