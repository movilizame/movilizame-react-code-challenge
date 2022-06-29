import { useEffect, useState } from "react";
import Movies from "../../services/movies";
import MoviesList from "../ui/MoviesList";
import SearchMovies from "../ui/SearchMovies";
import WatchList from "../ui/WatchList";




export default function Home () {
    const [movies, setMovies] = useState([])
    function passData (data) {
        setMovies(data)
    }

    return (
        <div>
            <h1>¿Qué puedo mirar?</h1>
            <div>
                <SearchMovies passData = {passData}/>
                <MoviesList movies={movies} />
            </div>
            <div>
                <WatchList />
            </div>
            
        </div>
    )
}