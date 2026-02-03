require("dotenv").config();
const app = require("./src/app");
const connectToDB = require("./src/config/database");

// server ko database se connect krna h connectToDB func yaha call hoga... or func create config => database.js file m hoga.

connectToDB().then(() => {
  app.listen(3000, () => {
    console.log("server is running on port:3000 ✅");
  });
});
