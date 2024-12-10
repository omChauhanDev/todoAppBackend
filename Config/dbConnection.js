const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
// to connect to mongodb
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("successfully connected to mongodb");
  } catch (error) {
    console.log("Error connecting to mongodb", error);
  }
};

module.exports = { connectDb };
