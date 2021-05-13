const { Sequelize, Model } = require("sequelize");

const sequelize = new Sequelize("UserData", "admin", "n0m3l0", {
  host: "localhost",
  dialect: "mssql",
  port: "1433",
});

async function checkConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

checkConnection();

module.exports = sequelize;
