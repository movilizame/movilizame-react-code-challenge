import React, { useContext } from "react";
import {
  MoviesContext,
  MoviesDispatchContext,
} from "../contexts/MoviesContext";

export function deleteMovieFromWatchlist(movie, dispatch) {
  dispatch({ type: "deleteMovie", watchList: movie });
}

function bringMoviesToWatchlist(movie, dispatch) {
  dispatch({ type: "addMovie", watchList: movie });
}

export default function MoviesList(props) {
  const dispatch = useContext(MoviesDispatchContext);
  const movieObject = useContext(MoviesContext);
  const movieList = movieObject.movies;
  const watchList = movieObject.watchList;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      {movieList.length > 0 ? (
        movieList.map((movie) => (
          <div className="movie-container" key={movie.id}>
            <div className="movie img">
              <img
                src={imageBaseUrl + movie.poster_path}
                alt="Foto portada de la pelicula"
              />
            </div>
            <div className="movie data">
              <h1>{movie.title}</h1>
              <h4>{movie.release_date}</h4>
              <h5>
                Puntaje: {movie.vote_average} / Popularidad:{" "}
                {Math.floor(parseInt(movie.popularity))}
              </h5>
            </div>
            
              {!watchList.includes(movie) ? (
                <div className="boton-movielist">
                  <button
                    onClick={() => {
                      bringMoviesToWatchlist(movie, dispatch);
                    }}
                    className="bt"
                  >
                    Agregar a la watchlist
                  </button>
                </div>
              ) : (
                <div className="boton-movielist">
                  <button
                    onClick={() => {
                      deleteMovieFromWatchlist(movie, dispatch);
                    }}
                    className="bt"
                  >
                    Eliminar de la watchlist
                  </button>
                </div>
              )}
            
          </div>
        ))
      ) : (
        <h6></h6>
      )}
    </div>
  );
}
