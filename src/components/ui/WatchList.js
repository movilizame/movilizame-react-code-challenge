import { useContext } from "react";
import { MoviesContext, MoviesDispatchContext } from "../contexts/MoviesContext";

export default function WatchList () {
    const {movies} = useContext(MoviesContext)
    const dispatch = useContext(MoviesDispatchContext)

    function removeMovie(movie){
        var index = movies?.indexOf(movie)
        movies.splice(index, 1);
        
        dispatch({type: 'setMovies', movies: movies})
    }

    const listMovies = movies?.map((movie)=>{
        return(
            <li class='flex flex-row place-items-end gap-1 m-1 items-center'>
                <p className='text-lg text-white'>{movie.title}</p>
                <button 
                    class=
                        "ml-auto justify-center w-8 h-6 text-white rounded-lg focus:shadow-outline"
                    onClick={()=>{removeMovie(movie)}}>
                    X
                </button>
            </li>
        )
    })
    return (
        <div className='flex flex-col w-2/3'>
            <p className='font-bold lg:text-[40px] md:text-[30px] sm:text-[20px]'>Mi lista</p>
            <ul className='list-disc bg-sky-500 shadow-md rounded-md'>
                {listMovies}
            </ul>
        </div>
    );
}