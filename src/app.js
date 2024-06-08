const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { sequelize, testConnection } = require("./config/db");

// Express App
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000", // your React app's address
    credentials: true, // enable set cookie and credentials
  })
);

// Test the database connection
testConnection();

// Routes
const breadRoutes = require("./routes/breadRoute");

// API
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});
app.use("/api/bread", breadRoutes);

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
