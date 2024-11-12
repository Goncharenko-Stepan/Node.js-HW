import { Sequelize } from "sequelize";
import { readFileSync } from "fs";
import path from "path";

const configPath = path.resolve("config", "config.json");
const config = JSON.parse(readFileSync(configPath, "utf-8"));

const environment = process.env.NODE_ENV || "development";
const dbConfig = config[environment];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  }
);

export default sequelize;
