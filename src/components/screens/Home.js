import React from "react";
import MoviesList from "../ui/MoviesList";
import SearchMovies from "../ui/SearchMovies";
import WatchList from "../ui/WatchList";

export default function Home() {
    return (
        <div className='grid grid-cols-5 m-6'>
            <p className='font-bold lg:text-[45px] md:text-[35px] sm:text-[25px] col-span-5'>Peliculas para mirar</p>
            <div class='col-span-3'>
                <SearchMovies/>
                <MoviesList/>
            </div>
            <div class='col-span-2'>
                <WatchList />
            </div>
        </div>
    )
}