const { books } = require("../config/app.js");
const { getAllBlogsFromDB } = require("../models/booksModels.js");

const getAllBooks = (req, res) => {
    getAllBooksFromDB()
        .then((data) => {
            res.json(data);
        })
        .catch((e) => {
            console.log(e);
            res.status(404).json({ msg: "not found" })
        });
};
const getOneBooktWithParams = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const myBook = books.find((item) => item.id == id);
  if (!myBook) return res.sendStatus(404); //res.status(404).json({message:'product not found'})
  res.json(myBook);
};

const createBook = (req, res) => {
  console.log(req.body);
  const { title, publishedYear } = req.body;
  const newBook = { id: books.length + 1, title, publishedYear };
  books.push(newBook);
  res.json(books);
};
module.exports = {
  getAllBooks,
  getOneBooktWithParams,
  createBook,
  };
