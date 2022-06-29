import { useState } from "react";

export default function SearchMovies(props) {

    const[title, setTitle] = useState("")
    const[year, setYear] = useState(0)


    return <div>
    <input placeholder="Movie" onChange={event => setTitle(event.target.value) } ></input>
    <input placeholder="Year" onChange={event => setYear(event.target.value)}></input>
        <button onClick={() => {
           if (title!="" && year!="") props.passData([title,year]);
        }}>
            Search
        </button>
    </div>;
}