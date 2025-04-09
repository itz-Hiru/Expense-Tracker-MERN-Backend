const mongoose = require("mongoose");

const conncetDB = async () => {
  try {
    await mongoose.connect(process.env.MOGODB_URI, {});
    console.log("MongoDB database connected.");
  } catch (error) {
    console.error("Error while connecting to MongoDB ", error);
    process.exit(1);
  }
};

module.exports = conncetDB;
