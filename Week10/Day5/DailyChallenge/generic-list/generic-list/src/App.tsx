import "./App.css";
import BookApp from "./features/books/BookApp";
import MoviesApp from "./features/movies/MoviesApp";
import UserApp from "./features/users/UserApp";
function App() {
  return (
    <>
      <BookApp />
      <MoviesApp />
      <UserApp/>
    </>
  );
}

export default App;
