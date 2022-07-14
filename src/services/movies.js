// b7d4916d0799dfce932437fe9f242f2c
// REVIEW: Esta es la API key de movie database
// ENDPOINTS: https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=<<titulo>>&page=1&include_adult=false
// DOCUMENTACIÓN: https://developers.themoviedb.org/3/search/search-movies
// TODO: Implementar llamada a la API usando fetch

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
import { useState, useEffect } from 'react'
import moment from 'moment'

export async function getMovies(title, date) {
  
  try {
    const baseUrl = "https://api.themoviedb.org/3/search/movie?api_key="
    const apiKey = "b7d4916d0799dfce932437fe9f242f2c"
    const lenAndQuery = "&language=en-US&query="
    const endUrl = "&page=1&include_adult=false"


    const res = await fetch(baseUrl + apiKey + lenAndQuery + title + endUrl)
    const allData = await res.json()
    let movies = allData["results"]

    return (movies.filter((movie)=> moment(movie.release_date).isBefore(date+"-01-01")))
  }
  catch (error){
    throw new Error (error);}
}



