import express from "express";
import "dotenv/config";
import connectDB from "./db/index.js";
import Publisher from "./model/Publisher.js";
import Magazine from "./model/Magazine.js";
import Tag from "./model/Tag.js";
import Article from "./model/Article.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const startServer = async () => {
  try {
    await connectDB();

    /////////////////////////////////// PUBLISHERS //////////////////////////////////////

    //                                          //CREATE PUBLISHERS

    app.post("/publishers", async (req, res) => {
      try {
        const { name, location } = req.body;
        const publisher = await Publisher.create({ name, location });
        res.status(201).json(publisher);
      } catch (error) {
        res.status(500).json({ error: "Ошибка при создании издателя" });
      }
    });

    //                                          //GET PUBLISHERS

    app.get("/publishers", async (req, res) => {
      try {
        const publishers = await Publisher.find();
        res.status(200).json(publishers);
      } catch (error) {
        res.status(500).json({ error: "Ошибка при получении издателей" });
      }
    });

    /////////////////////////////////// PUBLISHERS //////////////////////////////////////

    /////////////////////////////////// MAGAZINES //////////////////////////////////////

    //                                          //CREATE MAGAZINES

    app.post("/magazines", async (req, res) => {
      try {
        const { title, issueNumber, publisherId } = req.body;
        const magazine = await Magazine.create({
          title,
          issueNumber,
          publisher: publisherId,
        });
        res.status(201).json(magazine);
      } catch (error) {
        res.status(500).json({ error: "Ошибка при создании журнала" });
      }
    });
    //                                          //GET MAGAZINES
    app.get("/magazines", async (req, res) => {
      try {
        const magazines = await Magazine.find().populate("publisher");
        res.status(200).json(magazines);
      } catch (error) {
        res.status(500).json({ error: "Ошибка при получении журналов" });
      }
    });

    /////////////////////////////////// MAGAZINES //////////////////////////////////////

    /////////////////////////////////// TAGS //////////////////////////////////////

    // CREATE TAGS
    app.post("/tags", async (req, res) => {
      try {
        const { name } = req.body;
        const tag = await Tag.create({ name });
        res.status(201).json(tag);
      } catch (error) {
        res.status(500).json({ error: "Ошибка при создании тега" });
      }
    });

    // GET TAGS
    app.get("/tags", async (req, res) => {
      try {
        const tags = await Tag.find();
        res.status(200).json(tags);
      } catch (error) {
        res.status(500).json({ error: "Ошибка при получении тегов" });
      }
    });

    /////////////////////////////////// TAGS //////////////////////////////////////

    /////////////////////////////////// ARTICLES //////////////////////////////////////

    // CREATE ARTICLES
    app.post("/articles", async (req, res) => {
      try {
        const { title, content, tagIds } = req.body;
        const article = await Article.create({
          title,
          content,
          tags: tagIds, // массив тегов
        });
        // Добавляем статью к тегам
        for (let tagId of tagIds) {
          await Tag.findByIdAndUpdate(tagId, {
            $push: { articles: article._id },
          });
        }
        res.status(201).json(article);
      } catch (error) {
        res.status(500).json({ error: "Ошибка при создании статьи" });
      }
    });

    // GET ARTICLES
    app.get("/articles", async (req, res) => {
      try {
        const articles = await Article.find().populate("tags"); // Заполняем теги для статей
        res.status(200).json(articles);
      } catch (error) {
        res.status(500).json({ error: "Ошибка при получении статей" });
      }
    });

    /////////////////////////////////// ARTICLES //////////////////////////////////////

    app.listen(PORT, () => {
      console.log(`Сервер запущен на http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Ошибка при запуске сервера: " + error);
    process.exit(1);
  }
};

startServer();
