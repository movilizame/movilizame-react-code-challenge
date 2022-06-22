import React, { useContext, useState } from "react";
import { MoviesContext, MoviesDispatchContext } from "../contexts/MoviesContext";


export default function MoviesList({ movies }) {
    const dispatch = useContext(MoviesDispatchContext)
    const auth = useContext(MoviesContext)
    console.log({auth})

    function handleMovie(movie){
        var array = auth.movies ? auth.movies : []
        var index = array?.indexOf(movie)

        if (index !== -1) {
            array.splice(index, 1);
        }else{
            array.push(movie);
        }
        
        dispatch({type: 'setMovies', movies: array})
    }

    const listMovies = movies?.map((movie) => {
        return (
            <div className='flex flex-row m-3 ml-0'>
                <img className='object-cover h-28 w-28' src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}></img>
                <div className='flex flex-col basis-1/3 ml-3'>
                    <p className='basis-1/2 text-[20px] font-semibold'>{movie.title}</p>
                    <p className='basis-1/4 '>{'Año: ' + movie.release_date.substring(0,4)}</p>
                    <p className='basis-1/4 '>{'Puntaje: ' + movie.vote_average + ' / Popularidad: ' + Math.round(movie.popularity)}</p>
                </div>
                <button
                    className='btn btn-primary ml-3 basis-1/4 text-white text-sm font-semibold rounded-md bg-sky-500'
                    onClick={()=>{handleMovie(movie)}}
                >
                    {auth.movies?.some(item => item.id===movie.id) ?
                        "Quitar de mi lista" : "Agregar a mi lista"
                    }
                </button>
            </div>
        )
    })

    return (
        <div className='w-2/3 flex flex-col'>
            {listMovies}
        </div>
    )

}