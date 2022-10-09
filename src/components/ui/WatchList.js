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
    <div className="mt-1">
      <p className="text-4xl">Mi Lista</p>
      {list.map((movie) => (
        <div className="mt-2" key={movie.id}>
          {movie.original_title}
          <button
            className="ml-2 border solid bg-red-600 border-red-700 p-1 rounded-md font-normal"
            onClick={() => deleteMovie(movie)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
