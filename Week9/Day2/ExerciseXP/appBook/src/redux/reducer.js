import { ADD_BOOK, REMOVE_BOOK, UPDATE_BOOK } from './actionType';

const initialState = {
  books: [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction' },
    { id: 2, title: '1984', author: 'George Orwell', genre: 'Dystopian' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic' },
    { id: 4, title: 'Harry Potter and the Chamber of Secrets', author: 'J. K. Rowlings', genre: 'Fiction' },
    { id: 5, title: 'Fahrenheit 451', author: 'Ray Bradbury', genre: 'Dystopian' },
    { id: 6, title: 'The Hunger Games', author: 'Suzanne Collins', genre: 'Dystopian' },
    { id: 7, title: 'Pride and Rejudice', author: 'Jane Austin', genre: 'Classic' },
    { id: 8, title: 'War & Peace', author: 'Leon Tolstoy', genre: 'Fiction' },
    { id: 9, title: 'Gone with the wind', author: 'Margarett Mitchell', genre: 'Fiction' },
    { id: 10, title: 'I am Pilgrim', author: 'Terry Hayes', genre: 'Fiction' },
  ],
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {...state, books: [...state.books, action.payload],};

    case REMOVE_BOOK:
          return { ...state, books: state.books.filter((book) => book.id !== action.payload), };
      
    case UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? { ...book, ...action.payload } : book
        ),
      };

    default:
      return state;
  }
};
