const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//cors
const cors = require("cors");

// connect mongodb
const dbURL = process.env.MONGO_URL;
console.log("MongoDB URL:", process.env.MONGO_URL);

console.log(dbURL);

// connect to mongodb database
mongoose
  .connect(dbURL)
  .then(() => {
    console.log("connected to MongoDB");
    const app = express();
    const port = 5050;

    //connect to router

    app.use(cors());

    app.listen(port, () => {
      console.log(`server running on http://localhost:${port}
        `);
    });
  })
  .catch((err) => {
    console.log("failed to connect to mongoDB", err);
  });
