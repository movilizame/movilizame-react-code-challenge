import React, { useEffect } from "react";
import apiCalls from "../../services/movies";
const calls = new apiCalls

export default function SearchMovies () {
    const [movies, setMovies] = React.useState([])
    const [title, setTitle] = React.useState('');
    const [year, setYear] = React.useState('');

    React.useEffect(()=>{
        calls.getMovies(title, year).then((result)=>{setMovies(result)})
    }, [title, year])
    
    console.log(movies)

    const listMovies = movies?.map((item)=>{return(<h1>{item.title}</h1>)})

    return (<div>
        <h2>Buscar</h2>
        <label>
            Titulo
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            Año
            <input type="text" value={year} onChange={(e)=>setYear(e.target.value)}/>
        </label>
        {listMovies}
    </div>);
}