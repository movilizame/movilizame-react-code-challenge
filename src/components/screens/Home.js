import { useEffect, useState } from "react";
import moviesData from "../../services/movies";
import MoviesList from "../ui/MoviesList";
import SearchMovies from "../ui/SearchMovies";
import WatchList from "../ui/WatchList";




export default function Home () {
    /*const [movies, setMovies] = useState([])
    function getMovies (data) {
        setMovies(data)
    }*/

    return (
        <div className="container">
            
            <div>
            <h1>¿Qué puedo mirar?</h1>
                <SearchMovies />
                <MoviesList />
            </div>
            <div>
                <WatchList />
            </div>
            
        </div>
    )
}