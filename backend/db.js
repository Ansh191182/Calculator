const mongoose = require("mongoose");
const mongUrl = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    const response = await mongoose.connect(mongUrl);

    if (response) {
      console.log("Databse is connected successfully");
    } else {
      console.log("Database is not sucessfully connected");
    }
  } catch (error) {
    console.log("Internal server error");
  }
};

module.exports = connectDB;
