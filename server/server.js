const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRouter= require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes")
const shopProductsRouter =require("./routes/shop/products-routes")


// connect mongodb
const dbURL = process.env.MONGO_URL;


// connect to mongodb database
mongoose
  .connect(dbURL)
  .then(() => {
    console.log("connected to MongoDB");
    const app = express();
    const PORT =  process.env.PORT || 5000;

    app.use(
      cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: [
          "Content-Type", 
          "Authorization",
           "cache-control",
            "Express",
            "pragma",
    ],
    credentials:true,

      }));
    app.use(express.json());  
    app.use(cookieParser());
    app.use('/api/auth', authRouter); 
    app.use("/api/admin/products",adminProductsRouter);
    app.use("/api/shop/products", shopProductsRouter);




    app.listen(PORT, () => {
      console.log(`server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("failed to connect to mongoDB", err);
  });
