const Sequelize = require("sequelize");
const dotenv = require("dotenv");
const path = require("path");

// Resolve path to .env file
const envPath = path.resolve(__dirname, "../../.env");

// Load environment variables from .env file
dotenv.config({ path: envPath });

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    logging: false,
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({ force: true });
    console.log("Database Host:", process.env.DB_HOST);

    console.log("Connection has been established successfully.");
    await sequelize.sync();
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { sequelize, testConnection };
