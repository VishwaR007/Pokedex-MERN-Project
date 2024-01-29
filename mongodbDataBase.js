const mongoose = require("mongoose");

// Connect mongodb
// mongoose.connect("mongodb://localhost:27017/pokedex-app");
mongoose.connect(
  "mongodb+srv://vishwanathramaswamy:hyYInRy7gOlDPutY@cluster0.i5p39au.mongodb.net/"
);

const connectDb = async () => {
  try {
    console.log("Connection Done to DB");
  } catch (error) {
    console.error("DB Connection Failed");
    process.exit(0);
  }
};

module.exports = connectDb;
