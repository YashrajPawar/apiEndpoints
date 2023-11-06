import Book from "../models/book.model.js";
import { errorHandler } from "../utils/error.js";
import mongoose from "mongoose";

export const newBook = async (req, res, next) => {
  const { title, author, summary } = req.body;
  const newBook = new Book({ title, author, summary });

  try {
    await newBook.save();
    return res.status(201).json("Book created successfully");
  } catch (err) {
    next(err);
  }
};

export const allBooks = async (req, res, next) => {
  try {
    const books = await Book.find({}).exec();

    if (books.length === 0) {
      next(errorHandler("401", "No Books are available"));
      return;
    }

    res.status(201).json(books);
  } catch (error) {
    next(error);
  }
};

export const getBookById = async (req, res, next) => {
  try {
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);

    if (!isValidId) {
      next(errorHandler("401", "Invalid book ID"));
      return;
    }

    const book = await Book.findById({ _id: req.params.id });

    if (!book) {
      next(errorHandler("401", "Book not found"));
      return;
    }

    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};
