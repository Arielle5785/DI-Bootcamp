import { createSelector } from '@reduxjs/toolkit';

// Base selector to get all books
export const selectBooks = (state) => state.books.books;

// Create a dynamic genre filter selector
export const createGenreSelector = (genre) =>
  createSelector(selectBooks, (books) => books.filter((book) => book.genre === genre));

// Specific genre selectors
export const selectHorrorBooks = createGenreSelector('Horror');
export const selectFantasyBooks = createGenreSelector('Fantasy');
export const selectScienceFictionBooks = createGenreSelector('Science Fiction');
