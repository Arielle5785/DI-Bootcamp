import { ReactElement, useState } from "react";
import { Movie } from "../../types/types";
import GenericList from "../../utils/GenericList";

const MoviesApp = (): ReactElement => {
  // Use useState hook to manage the list of books
  const [movies, setMoviess] = useState<Movie[]>([
    { id: 1, name: "1984" },
    { id: 2, name: "Dune" },
  ]);

  // 4. Function to add a new book
  const addMovie = () => {
    const newMovie: Movie = {
      id: Date.now(),
      name: `New Movie ${Date.now()}`,
    };
    setMoviess([...movies, newMovie]);
  };

  // Render the list of books using the List component
  return (
    <div>
      <h2>Movie List</h2>
      <GenericList<Movie>
        items={movies}
        renderItem={(item: Movie) => <span>{item.name}</span>}
      />
      <button onClick={addMovie}>Add Movie</button>
    </div>
  );
};
export default MoviesApp;
