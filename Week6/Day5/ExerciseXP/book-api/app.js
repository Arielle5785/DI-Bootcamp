const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const books = [
    { id: 1, tite: 'Pride and Prejudice', publishedYear: 1813 },
    { id: 2, tite: 'Gone with the wind', publishedYear: 1939 },
    { id: 3, tite: 'Harry Potter and the Goblet of Fire', publishedYear: 2000 },
]

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

// app.get('/api/books', (req, res) =>
// {
//     res.json(books)
// }
// )
app.get("/api/books/:id", (req, res) => {
    const { id } = req.params;
    const book = books.find((item) => item.id == id);
    if (!book) return res.Status(404).json({ msg: 'Book not found' })
    res.json(book);
}
)