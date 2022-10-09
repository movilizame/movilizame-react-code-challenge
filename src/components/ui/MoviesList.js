import { useMoviesContext } from '../contexts/MoviesContext';

export default function WatchList() {
  const { movies } = useMoviesContext();
  const { list } = useMoviesContext();
  const { dispatch } = useMoviesContext();
  const imgRoute = 'https://image.tmdb.org/t/p/w300';

  const onSubmit = (movie) => {
    dispatch({
      type: 'setList',
      list: movie,
    });
  };

  const deleteOnList = (movie) => {
    dispatch({
      type: 'deleteMovie',
      movie: movie.id,
    });
  };

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
          {list.some((item) => item.id === movie.id) ? (
            <div>
              <button onClick={() => deleteOnList(movie)}>
                Quitar de mi lista
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                onSubmit(movie);
              }}
            >
              Agregar a mi lista
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
