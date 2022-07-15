import { useContext } from "react";
import {
  MoviesContext,
  MoviesDispatchContext,
} from "../contexts/MoviesContext";
import { deleteMovieFromWatchlist } from "./MoviesList";

export default function WatchList() {
  const dispatch = useContext(MoviesDispatchContext);
  const movieObject = useContext(MoviesContext);
  const watchList = movieObject.watchList;

  return (
    <div className="wl-container">
      <h1>Watchlist</h1>
      {watchList.length > 0 ? (
        watchList.map((movie) => (
          <div key={movie.id} className="wl">
            <h3>{movie.title}</h3>

            <button
              onClick={() => {
                deleteMovieFromWatchlist(movie, dispatch);
              }}
            >
              X
            </button>
          </div>
        ))
      ) : (
        <p>Aun no hay elementos en su watchlist</p>
      )}
    </div>
  );
}
