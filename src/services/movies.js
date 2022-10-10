// b7d4916d0799dfce932437fe9f242f2c
// REVIEW: Esta es la API key de movie database
// ENDPOINTS: https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=<<titulo>>&page=1&include_adult=false
// DOCUMENTACIÓN: https://developers.themoviedb.org/3/search/search-movies
// TODO: Implementar llamada a la API usando fetch

const key = 'b7d4916d0799dfce932437fe9f242f2c';
async function getMovies(title) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${title}&page=1&include_adult=false`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getMovies,
};
