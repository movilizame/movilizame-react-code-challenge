import { useMoviesContext } from '../contexts/MoviesContext';

export default function WatchList() {
  const { movies } = useMoviesContext();
  const imgRoute = 'https://image.tmdb.org/t/p/w300';

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img
            src={`${imgRoute}${movie.poster_path}`}
            alt={movie.original_title}
            width="120"
            height="120"
          />
          <div>
            <h2>{movie.original_title}</h2>
            <div>
              <p>Año: {new Date(movie.release_date).getFullYear()}</p>
            </div>
            <div>
              <p>Puntuación: {movie.vote_average}</p>
              <p>Popularidad: {Math.round(movie.popularity)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
