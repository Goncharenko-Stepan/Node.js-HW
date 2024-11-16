import express from "express";
import sequelize from "./config/db.js";
import App from "./modules/App.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");

    await sequelize.sync({ alter: true });
    console.log("Models synchronized with the database.");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
})();

app.get("/apps", async (req, res) => {
  try {
    const apps = await App.findAll();
    res.status(200).json(apps);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch apps." });
  }
});

app.post("/apps", async (req, res) => {
  const { name, size } = req.body;

  if (!name || !size) {
    return res.status(400).json({ error: "Name and size are required." });
  }

  try {
    const newApp = await App.create({ name, size });
    res.status(201).json(newApp);
  } catch (error) {
    res.status(500).json({ error: "Failed to create app." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
