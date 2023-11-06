import express from "express";
import { allBooks, newBook } from "../controllers/book.controller.js";

const router = express.Router();


router.post('/createBook', newBook);
router.get('/allBooks', allBooks);
router.get('/getBook/:id');


export default router;
