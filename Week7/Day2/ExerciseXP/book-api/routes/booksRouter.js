const { Router } = require("express");

const {
    getAllBooks,
    getOneBlogWithParams,
    createBook,
} = require("../controllers/booksController.js");

const Router = Router();

router.get("/api/books", getAllBooks);
router.get("/api/books/:id", getOneBooksWithParams);
router.post("/api/books", createBooks);

module.exports = {
    booksRouter :router,
}


