import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postRout from "./Router/Post.router";
dotenv.config();
const app = express();
app.use(express.json());
//routes comming
app.use("/posts", postRout);
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;
console.log("database url:", MONGODB_URL);

if (!MONGODB_URL) {
  throw new Error("MONGODB_URL is not defined");
}

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("DB connection error:", error);
  });
