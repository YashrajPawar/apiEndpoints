import express from "express";
import {
  allBooks,
  getBookById,
  newBook,
  updateBook,
} from "../controllers/book.controller.js";

const router = express.Router();

router.post("/createBook", newBook);
router.get("/allBooks", allBooks);
router.get("/getBook/:id", getBookById);
router.patch("/update/:id", updateBook);

export default router;
