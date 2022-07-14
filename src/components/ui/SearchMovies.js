import { useContext, useState } from "react";
import { getMovies } from "../../services/movies";
import { React } from "react";
import { MoviesDispatchContext } from "../contexts/MoviesContext";
import { initialState } from "../contexts/MoviesContext";

export default function SearchMovies() {
    
    //const store = useContext (MoviesContext)
    const dispatch = useContext (MoviesDispatchContext)
    const[title, setTitle] = useState("")
    const[date, setYear] = useState(0)


    async function bringMoviesToContext(title,date){
        
        if (title.length>0 && date>1000){
            const movieList = await getMovies(title,date)
            dispatch({type:'setMovies', movies: movieList})
            
        }
        else {dispatch({type:'clear', initialState})}
        
    }

    return <div>
    <input placeholder="Movie" onChange={event => setTitle(event.target.value) } headertitle= "Peliculas"></input>
    <input placeholder="Year" onChange={event => setYear(event.target.value)}></input>
    <button onClick={() => {bringMoviesToContext(title,date)}}>
            Search
        </button>
    </div>;

}

