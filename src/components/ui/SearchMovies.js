import { useState } from "react";
import { loadMovies } from 'services/movies';

export default function SearchMovies () {
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