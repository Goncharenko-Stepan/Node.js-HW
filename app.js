import express from "express";
import "dotenv/config";
import connectDB from "./db/index.js";
import Product from "./model/Products.js";
import Category from "./model/Category.js"; // Импортируем модель Category

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const startServer = async () => {
  try {
    await connectDB();

    //////////////////////////////////////////////////////// CATEGORY //////////////////////////////////////////////
    //                // POST CATEGORY
    app.post("/createCategory", async (req, res) => {
      try {
        const { name } = req.body;
        const category = new Category({ name });
        await category.save();
        res.status(201).json(category);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
    //////////////////////////////////////////////////////// CATEGORY //////////////////////////////////////////////

    //////////////////////////////////////////////////////// PRODUCTS //////////////////////////////////////////////
    //                // GET PRODUCTS
    app.get("/getProducts", async (req, res) => {
      try {
        const products = await Product.find().populate("category");
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    //                // POST PRODUCT
    app.post("/createProducts", async (req, res) => {
      try {
        const { name, price, category } = req.body;

        // Найдем категорию по имени
        const categoryDoc = await Category.findOne({ name: category });
        if (!categoryDoc) {
          return res.status(400).json({ error: "Category not found" });
        }

        // Создаем продукт с ObjectId категории
        const product = new Product({
          name,
          price,
          category: categoryDoc._id, // Используем _id категории
        });

        await product.save();
        res.status(201).json(product);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
    //////////////////////////////////////////////////////// PRODUCTS //////////////////////////////////////////////

    app.listen(PORT, () => {
      console.log(`Сервер запущен на http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Ошибка при запуске сервера: " + error);
    process.exit(1);
  }
};

startServer();
