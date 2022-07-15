import moment from "moment";

const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = "b7d4916d0799dfce932437fe9f242f2c";

export async function getMovies(title, date) {
  try {
    const endPoint = "search/movie?api_key=";
    const queryParams =
      "&language=en-US&query=" + title + "&page=1&include_adult=false";

    const res = await fetch(baseUrl + endPoint + apiKey + queryParams);
    const allData = await res.json();
    let movies = allData["results"];

    return movies.filter((movie) =>
      moment(movie.release_date).isBefore(date + "-01-01")
    );
  } catch (error) {
    throw new Error(error);
  }
}
