const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully 🎉");
  } catch (error) {
    console.log("Database connection failed ❌");
    console.log(error.message);
    process.exit(1); // app band kar de
  }
}

module.exports = connectToDB;
