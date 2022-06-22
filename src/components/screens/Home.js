import React from "react";
import MoviesList from "../ui/MoviesList";
import SearchMovies from "../ui/SearchMovies";
import WatchList from "../ui/WatchList";

export default function Home() {
    const [movies, setMovies] = React.useState([])

    return (
        <div className='m-6'>
            <p className='font-bold lg:text-[45px] md:text-[35px] sm:text-[25px]'>Peliculas para mirar</p>
            <div>
                <SearchMovies setMovies={setMovies} />
                <MoviesList movies={movies} />
            </div>
            <div>
                <WatchList />
            </div>

        </div>
    )
}