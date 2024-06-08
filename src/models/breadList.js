const { Sequelize, sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");

const BreadType = sequelize.define(
  "BreadType",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    gram: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
  },
  { tableName: "BreadType" }
);

module.exports = BreadType;
