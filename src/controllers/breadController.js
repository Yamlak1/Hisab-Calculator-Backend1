const { where } = require("sequelize");
const BreadType = require("../models/breadList");

const addBreadType = async (req, res) => {
  try {
    const { name, price, gram } = req.body;

    if (!name || !price || !gram) {
      return res
        .status(400)
        .send({ message: "The name ,price ,gram is required" });
    }

    const breadType = await BreadType.create({
      name,
      price,
      gram,
    });
    res.status(201).json({ breadType });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error creating type ", error });
  }
};

const getBreadType = async (req, res) => {
  try {
    const breadName = await BreadType.findAll({
      attributes: ["id", "name", "price"],
    });
    return res.status(201).json(breadName);
  } catch (error) {
    console.error("Error listing type:", error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = { addBreadType, getBreadType };
