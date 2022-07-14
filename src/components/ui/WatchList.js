import { useContext } from "react";
import { MoviesContext, MoviesDispatchContext } from "../contexts/MoviesContext";

export default function WatchList () {
    const dispatch = useContext(MoviesDispatchContext)
    const movieObject = useContext(MoviesContext);
    const watchList = movieObject.watchList

    function deleteMovieFromWatchlist(movie) {
        dispatch({type:'deleteMovie', watchList: movie})
    }


    return <div className="wl-container">
        <h1 className="wl title">Watch list</h1>
            {(watchList.length > 0) ?  
                (watchList.map(movie => (
                    <div key={movie.id} className="wl">
                        <h3>{movie.title}</h3>
                        <button onClick={() => {deleteMovieFromWatchlist(movie)}} >Eliminar</button>
                    </div>

                ))) : <h5></h5>}
            
        </div>
}
