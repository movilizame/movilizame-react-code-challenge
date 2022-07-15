import { useContext, useState } from "react";
import { getMovies } from "../../services/movies";
import { React } from "react";
import { MoviesDispatchContext } from "../contexts/MoviesContext";
import { initialState } from "../contexts/MoviesContext";

export default function SearchMovies() {
  const dispatch = useContext(MoviesDispatchContext);
  const [title, setTitle] = useState("");
  const [date, setYear] = useState(0);

  async function loadMoviesToContext(title, date) {
    if (title.length > 0 && date > 1000) {
      const movieList = await getMovies(title, date);
      dispatch({ type: "setMovies", movies: movieList });
    } else {
      dispatch({ type: "clear", initialState });
    }
  }

  return (
    <div className="search-container">
      <div className="col">
        <h3>Título:</h3>
        <input
          placeholder="Movie"
          onChange={(event) => setTitle(event.target.value)}
          headertitle="Peliculas"
        ></input>
      </div>
      <div className="col">
        <h3>Año hasta:</h3>
        <input
          placeholder="Year"
          onChange={(event) => setYear(event.target.value)}
        ></input>
      </div>
      <div className="bt">
        <button
          onClick={() => {
            loadMoviesToContext(title, date);
          }}
        >
          Buscar
        </button>
      </div>
    </div>
  );
}
