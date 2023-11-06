import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRouter from "./routes/book.route.js"
dotenv.config();


const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(8080, () => {
  console.log("server running on port 8080!!");
});


app.use(express.json());

app.use("/api/book", bookRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });