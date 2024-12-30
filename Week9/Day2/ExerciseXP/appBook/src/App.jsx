import React from 'react';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

import './App.css'


function App() {
 
  return (
    <>
      <div>
        <h1>Book Inventory Management</h1>
        <AddBook />
        <BookList />
      </div>
    </>
  );
};

export default App
