import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/action';
import GenreDropdown from './Genre';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = () => {
    if (title && author && genre) {
      const newBook = { id: Date.now(), title, author, genre };
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
      setGenre('');
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <GenreDropdown value={ genre} onChange={setGenre} />
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default AddBook;
