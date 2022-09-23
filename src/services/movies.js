// b7d4916d0799dfce932437fe9f242f2c
// REVIEW: Esta es la API key de movie database
// ENDPOINTS: https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=<<titulo>>&page=1&include_adult=false
// DOCUMENTACIÓN: https://developers.themoviedb.org/3/search/search-movies
// TODO: Implementar llamada a la API usando fetch

async function getMovies(title, year) {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=b7d4916d0799dfce932437fe9f242f2c&language=en-US&query=${title}&page=1&include_adult=false`;
    const moviesResponse = await fetch(url);
    const moviesReturned = await moviesResponse.json();
    if (moviesReturned) {
      const movies = moviesReturned.results.filter((movie) => (Number(movie.release_date.split('-')[0]) < year)).slice(0, 3);
      return movies;
    }
    return null;
  } catch (error) {
    throw new Error('Error in getMovies', error);
  }
}

export {
  getMovies,
};
