import React, { useContext, useState } from "react";
import { useSelector} from "react-redux";
import { MoviesContext, MoviesDispatchContext } from "../contexts/MoviesContext";


export default function MoviesList() {
    const moviesRedux = useSelector((state)=>state.movies.movies)
    const listMovies = useContext(MoviesContext)
    const dispatch = useContext(MoviesDispatchContext)

    function handleMovie(movie){
        var array = listMovies.movies ? listMovies.movies : []
        var index = array?.indexOf(movie)

        if (index !== -1) {
            array.splice(index, 1);
        }else{
            array.push(movie);
        }
        
        dispatch({type: 'setMovies', movies: array})
    }

    const filteredMovies = moviesRedux?.map((movie) => {
        return (
            <div className='flex flex-row m-3 ml-0 h-28 items-center bg-white rounded-lg border shadow-md'>
                <img className='object-cover h-28 w-28 rounded-l-md' src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt=''></img>
                <div className='flex flex-col ml-3'>
                    <p className='text-[20px] font-semibold'>{movie.title}</p>
                    <p className=''>{'Año: ' + movie.release_date.substring(0,4)}</p>
                    <p className=''>{'Puntaje: ' + movie.vote_average + ' / Popularidad: ' + Math.round(movie.popularity)}</p>
                </div>
                <button
                    className='ml-auto h-28 w-28 text-white text-sm font-semibold rounded-r-md bg-sky-500'
                    onClick={()=>{handleMovie(movie)}}
                >
                    {listMovies.movies?.some(item => item.id===movie.id) ?
                        "Quitar de mi lista" : "Agregar a mi lista"
                    }
                </button>
            </div>
        )
    })

    return (
        <div className='w-3/4 flex flex-col'>
            {filteredMovies}
        </div>
    )

}