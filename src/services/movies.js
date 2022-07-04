const key = 'b7d4916d0799dfce932437fe9f242f2c';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=';

async function loadMovies(title) {
  try {
    const request = await fetch(`${url}${key}&language=en-US&query=${title}&page=1&include_adult=false`,
      {
        headers:
        {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
    const json = await request.json();
    return json;
  }
  catch (e) {
    console.error(e);
  }
}