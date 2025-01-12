import FullList from "./model/FullList";
import ListItem from "./model/item";
import { v4 as uuidv4 } from "uuid";
import BookApp from "./features/books/BookApp";
import MoviesApp from "./features/movies/MoviesApp";
import React from "react";
import { createRoot } from "react-dom/client";
import ListTemplate from "./templates/ListTemplate";

const initApp = (): void => {
  const bookList = new FullList([]); // Book List instance
  const movieList = new FullList([]); // Movie List instance

  // Handle Book Entry Form Submission
  const bookEntryForm = document.getElementById("bookEntryForm") as HTMLFormElement;
  bookEntryForm.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    const input = document.getElementById("newBook") as HTMLInputElement;
    const bookTitle = input.value.trim();
    if (!bookTitle) return;

    const newBook = {
      id: uuidv4(),
      title: bookTitle,
      author: "Unknown Author",
    };
    bookList.addItem(newBook);
    renderLists();
  });

  // Handle Movie Entry Form Submission
  const movieEntryForm = document.getElementById("movieEntryForm") as HTMLFormElement;
  movieEntryForm.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    const input = document.getElementById("newMovie") as HTMLInputElement;
    const movieName = input.value.trim();
    if (!movieName) return;

    const newMovie = {
      id: uuidv4(),
      name: movieName,
    };
    movieList.addItem(newMovie);
    renderLists();
  });

  // Clear Books and Movies
  const clearBooksButton = document.getElementById("clearBooksButton") as HTMLButtonElement;
  clearBooksButton.addEventListener("click", () => {
    bookList.clearList();
    renderLists();
  });

  const clearMoviesButton = document.getElementById("clearMoviesButton") as HTMLButtonElement;
  clearMoviesButton.addEventListener("click", () => {
    movieList.clearList();
    renderLists();
  });

  // Render lists dynamically
  const renderLists = () => {
    const bookAppRoot = createRoot(document.getElementById("book-app")!);
    bookAppRoot.render(<ListTemplate items={bookList.list} type="books" />);

    const movieAppRoot = createRoot(document.getElementById("movie-app")!);
    movieAppRoot.render(<ListTemplate items={movieList.list} type="movies" />);
  };

  // Initialize lists
  bookList.load();
  movieList.load();
  renderLists();
};

// Render React components using `createRoot`
const bookRoot = createRoot(document.getElementById("book-app")!);
bookRoot.render(<BookApp />);

const movieRoot = createRoot(document.getElementById("movie-app")!);
movieRoot.render(<MoviesApp />);

// Initialize the non-React application logic
initApp();
