import { useState } from 'react';
import { getMovies } from '../../services/movies';
import { useMoviesContext } from '../contexts/MoviesContext';

export default function SearchMovies() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const { dispatch } = useMoviesContext();

  const onSubmit = async (e) => {
    e.preventDefault();
    let movies = await getMovies(title);
    movies = movies.results;
    movies = movies.filter(
      (movie) => new Date(movie.release_date).getFullYear() < date,
    );
    dispatch({
      type: 'clear',
    });
    dispatch({
      type: 'setMovies',
      movies: movies,
    });
  };
  return (
    <div>
      <form className=" flex flex-row items-end">
        <div className="flex mt-100 mr-15 mx-1 ">
          <p>Titulo</p>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="search"
            placeholder="Ingrese titulo"
          />
        </div>
        <div>
          <p>Año</p>
          <input
            onChange={(e) => {
              setDate(e.target.value);
            }}
            type="number"
            placeholder="Ingrese año"
          />
        </div>
        <button onClick={onSubmit}>Buscar</button>
      </form>
    </div>
  );
}
