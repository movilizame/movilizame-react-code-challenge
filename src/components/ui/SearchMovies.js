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
      <div>
        <p>Título</p>
        <input
            onKeyPress={handleKeypress}
            onChange={handleTitle}
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
      <div>
        <p>Año hasta</p>
        <input
            onKeyPress={handleKeypress}
            onChange={handleYear}
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
      <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}