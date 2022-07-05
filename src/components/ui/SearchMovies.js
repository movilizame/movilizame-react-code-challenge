import { useState } from "react";
import { loadMovies } from 'services/movies';
import { useMoviesContext } from "components/contexts/MoviesContext.js";

export default function SearchMovies() {
  const { dispatch } = useMoviesContext();

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [validateTitle, setValidateTitle] = useState(true);
  const [validateYear, setValidateYear] = useState(true);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleYear = (e) => {
    setYear(e.target.value);
  }

  async function handleSubmit() {
    if (title.length > 0) {
      setValidateTitle(true);
      if (year.length === 4) {
        setValidateYear(true);
        const moviesLoad = await loadMovies(title);
        const movies = moviesLoad.results;
        dispatch({
          type: 'clear'
        })
        movies.forEach(movie => {
          const currentDate = new Date(movie.release_date).getFullYear();
          if (currentDate <= year) {
            dispatch({
              type: 'setMovies',
              movies: movie
            })
          }
        })
      } else {
        setValidateYear(false);
      }
    } else {
      if (year.length === 4) {
        setValidateYear(true);
        setValidateTitle(false);
      } else {
        setValidateTitle(false);
        setValidateYear(false);
      }
    }
  }

  const handleKeypress = (e) => {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode === 13) {
      handleSubmit();
    }
  }

  return (
    <div>
      <div className='flex flex-wrap items-end gap-3'>
        <div className="text-center">
          <p className='text-lg font-semibold text-slate-900'>
            Título
          </p>
          <input
            onKeyPress={handleKeypress}
            onChange={handleChange}
            type="search"
            style={{ borderColor: validateTitle ? "black" : "red" }}
            className="flex-auto px-3 py-1.5 border rounded focus:text-gray-700 focus:border-blue-600 focus:outline-none"
            placeholder="Ingrese un título"
          />
          <p
            id="msgID"
            aria-live="assertive"
            style={{ visibility: validateTitle ? "hidden" : "visible" }}
            className="text-xs text-red-500 mr-20">
            Ingrese un título válido
          </p>
        </div>
        <div className="text-center">
          <p className='text-lg font-semibold text-slate-900'>
            Año hasta
          </p>
          <input
            onKeyPress={handleKeypress}
            onChange={handleNumber}
            type="number"
            style={{ borderColor: validateYear ? "black" : "red" }}
            className="flex-auto px-3 py-1.5 border rounded focus:text-gray-700 focus:border-blue-600 focus:outline-none"
            placeholder="Ingrese un año"
          />
          <p
            id="msgID"
            aria-live="assertive"
            style={{ visibility: validateYear ? "hidden" : "visible" }}
            className="text-xs text-red-500 mr-20">
            Ingrese un año válido
          </p>
        </div>
        <button
          onClick={handleSubmit}
          className="mb-4 px-6 py-2.5 bg-blue-600 text-white rounded hover:bg-blue-700 active:bg-blue-800"
          type="submit"
        >
          <svg
            className="w-4"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0
                208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 
                99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128
                0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            >
            </path>
          </svg>
        </button>
      </div>
    </div>
  );
}