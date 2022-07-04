import { useState } from "react";
import { loadMovies } from 'services/movies';
import { useMoviesContext } from "components/contexts/MoviesContext.js";

export default function SearchMovies () {
    const { dispatch } = useMoviesContext();

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    
    const handleYear = (e) => {
        setYear(e.target.value);
    }

    async function handleSubmit() {
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
    }
    return (
        <div>
            <div>
                <p>Título</p>
                <input
                    onChange={handleTitle} 
                    type="search"
                    placeholder="Ingrese un título"
                />
            </div>
            <div>
                <p>Año hasta</p>
                <input
                    onChange={handleYear} 
                    type="number"
                    placeholder="Ingrese un año"
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}