const { Sequelize, DataTypes, Model, Op, where } = require("sequelize");

const sequelize = new Sequelize("mytestdb", "root", "dudqls12!@", {
  host: "localhost",
  dialect: "mysql",
});

// Getters Setters Virtuals
sequelize.define("Company", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    get() {},
  },
  city: {
    type: DataTypes.STRING,
  },
  pincode: {
    type: DataTypes.INTEGER,
  },
});

sequelize.sync();
