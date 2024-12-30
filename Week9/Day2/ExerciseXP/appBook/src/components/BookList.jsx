import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBooks } from '../redux/selector';

const BookList = () => {
  const books = useSelector(selectBooks);
  const [filter, setFilter] = useState('All');

  const filteredBooks =
    filter === 'All'
      ? books
      : books.filter((book) => book.genre.toLowerCase() === filter.toLowerCase());

  return (
    <div>
      <h2>Book Inventory</h2>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Fiction">Fiction</option>
        <option value="Dystopian">Dystopian</option>
        <option value="Classic">Classic</option>
      </select>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} - Genre: {book.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
