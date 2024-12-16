const { db } = require('../config/app.js');

const getAllBooksFromDB = () => {
    return db("books").select("id", "title", "publishedYear").orderBy("title");
};

module.exports = {
    getAllBooksFromDB
};