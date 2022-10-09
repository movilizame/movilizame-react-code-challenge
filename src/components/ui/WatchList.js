import { useMoviesContext } from '../contexts/MoviesContext';
export default function WatchList() {
  const { list } = useMoviesContext();
  const { dispatch } = useMoviesContext();

  const deleteMovie = (movie) => {
    dispatch({
      type: 'deleteMovie',
      movie: movie.id,
    });
  };
  return (
    <div>
      <p>Mi Lista</p>
      {list.map((movie) => (
        <div key={movie.id}>
          {movie.original_title}
          <button onClick={() => deleteMovie(movie)}>X</button>
        </div>
      ))}
    </div>
  );
}
