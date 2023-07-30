const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3001;
const db_URL = process.env.db_URL;

mongoose
    .connect(db_URL)
    .then((con) => {
      console.log("Connected to MongoDB server");
    });

app.listen(PORT, () => {
  console.log("Server Started");
});
