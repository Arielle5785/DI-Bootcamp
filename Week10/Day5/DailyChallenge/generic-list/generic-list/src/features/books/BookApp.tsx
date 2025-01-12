import { ReactElement, useState } from "react";
import { Book } from "../../types/types";
import GenericList from "../../utils/GenericList";

const BookApp = (): ReactElement => {
  // Use useState hook to manage the list of books
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "Dune", author: "Frank Herbert" },
  ]);

  // 4. Function to add a new book
  const addBook = () => {
    const newBook: Book = {
      id: Date.now(),
      title: `New Book ${Date.now()}`,
      author: "Unknown Author",
    };
    setBooks([...books, newBook]);
  };

  // Render the list of books using the List component
  return (
    <div>
      <h2>Book List</h2>
      <GenericList<Book>
        items={books}
        renderItem={(book: Book) => (
          <span>
            {book.title} by {book.author}
          </span>
        )}
      />
      <button onClick={addBook}>Add Book</button>
    </div>
  );
};
export default BookApp