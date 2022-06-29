// b7d4916d0799dfce932437fe9f242f2c
// REVIEW: Esta es la API key de movie database
// ENDPOINTS: https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=<<titulo>>&page=1&include_adult=false
// DOCUMENTACIÓN: https://developers.themoviedb.org/3/search/search-movies
// TODO: Implementar llamada a la API usando fetch

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { useState, useEffect } from 'react'


export default function Movies ({title, year,}) {
const key = "b7d4916d0799dfce932437fe9f242f2c"
const [datas, setDatas] = useState([])

useEffect(() => {
fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${title}&page=1&include_adult=false`)
.then(response =>  response.json())
.then((data) =>  {setDatas(data.results)
console.log(datas)})
}, [title, year, datas]);

return (<div>
{datas.length > 0 && (datas.filter(datas => datas?.release_date.slice(0,4)  <= year)).slice(0,3).map(datas => (
  <div>
{datas.release_date.slice(0,4)} 
</div>)
)}
</div>)
}


