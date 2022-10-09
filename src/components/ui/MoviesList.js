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
        <div key={movie.id} className="flex items-start">
          <img
            src={`${imgRoute}${movie.poster_path}`}
            alt={movie.original_title}
            width="120"
            height="120"
            className="m-3"
          />
          <div className="mt-1">
            <div>
              <h2 className="mt-1 font-sans text-xl">{movie.original_title}</h2>
              <div className="mt-3">
                <p className="font-sans">
                  Año: {new Date(movie.release_date).getFullYear()}
                </p>
              </div>
              <div>
                <p>Puntuación: {movie.vote_average}</p>
                <p>Popularidad: {Math.round(movie.popularity)}</p>
              </div>
            </div>
            {list.some((item) => item.id === movie.id) ? (
              <div>
                <button
                  onClick={() => deleteOnList(movie)}
                  className="text-emerald-100 bg-red-600 text-gray-300 border-red-700 p-1 mt-8 rounded-md border border-solid font-normal cursor-pointer select-none align-bottom"
                >
                  Quitar de mi lista
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  onSubmit(movie);
                }}
                className="text-emerald-100 bg-green-500 border-green-700 p-1 mt-8 rounded-md font-normal border border-solid cursor-pointer select-none align-bottom"
              >
                Agregar a mi lista
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
