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
          <div className="mx-2">
            <p className="text-3xl text-left">Titulo</p>
            <input
              type="search"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Ingrese titulo"
              className="flex sm:w-92 md:w-25 lg:w-25 xl:w-25 2xl:w-25 border-2 p-2 rounded-lg outline-none"
            />
          </div>
          <div className="appearance-none">
            <p className="text-3xl">Año</p>
            <input
              type="number"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              placeholder="Ingrese año"
              className="flex sm:w-92 md:w-25 lg:w-25 xl:w-25 2xl:w-25 border-2 p-2 rounded-lg appearance-none"
            />
          </div>
        </div>
        <button
          onClick={onSubmit}
          className="bg-blue-300 text-white rounded-full p-5 hover:bg-blue-400 focus:outline-none w-25 h-12 flex items-center justify-end"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          Buscar
        </button>
      </form>
    </div>
  );
}
