import React, { useContext } from "react";
import { MoviesContext, MoviesDispatchContext } from "../contexts/MoviesContext";




export default function MoviesList (props) {
   const dispatch = useContext (MoviesDispatchContext)
   const movieObject = useContext(MoviesContext);
   const movieList = movieObject.movies
   const watchList = movieObject.watchList
   const imageBaseUrl = "https://image.tmdb.org/t/p/w500"


   function bringMoviesToWatchlist(movie){
      
         dispatch({type:'addMovie', watchList: movie})
      

   }
   function deleteMovieFromWatchlist(movie){
       
         dispatch({type:'deleteMovie', watchList: movie})
      

   }

   return (
      <div>
        {(movieList.length > 0) ?  
            (movieList.map(movie => (
               <div className="movie-container" key={movie.id} >
                        <div className="movie img">
                           <img src={imageBaseUrl+movie.poster_path}/> 
                        </div>
                        <div className="movie data">
                           <h1>{movie.title}</h1>
                           <h4>{movie.release_date}</h4>
                           <h4>Puntaje: {movie.vote_average} / Popularidad: {Math.floor(parseInt(movie.popularity))}</h4>
                           </div>
                           <div className="bt">
                              {!watchList.includes(movie) ? 
                              <button onClick={() => {bringMoviesToWatchlist(movie)}} className="bt">Add to watchlist</button> 
                              : <button onClick={() => {deleteMovieFromWatchlist(movie)}} className="bt">Delete from watch list</button>}
                              
                           </div>
                  
               </div>))) : <h1></h1> }
      </div>      
   )
   function deleteMovieFromWatchlist(movie){
       
      dispatch({type:'deleteMovie', watchList: movie})
   

}
   }

   