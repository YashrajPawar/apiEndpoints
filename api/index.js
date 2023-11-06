import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
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