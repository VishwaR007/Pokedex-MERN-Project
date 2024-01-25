const mongoose = require("mongoose");

// Connect mongodb
mongoose.connect("mongodb://localhost:27017/pokedex-app");

const connectDb = async () => {
  try {
    console.log("Connection Done to DB");
  } catch (error) {
    console.error("DB Connection Failed");
    process.exit(0);
  }
};

module.exports = connectDb;
