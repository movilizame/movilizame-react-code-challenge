import { useMoviesContext } from '../contexts/MoviesContext';

export default function WatchList() {
  const { movies } = useMoviesContext();

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}> {movie.original_title}</div>
      ))}
    </div>
  );
}
