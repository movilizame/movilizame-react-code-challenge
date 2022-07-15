import MoviesList from "../ui/MoviesList";
import SearchMovies from "../ui/SearchMovies";
import WatchList from "../ui/WatchList";

export default function Home() {
  return (
    <div className="container">
      <div>
        <h1>¿Qué puedo mirar?</h1>
        <SearchMovies />
        <MoviesList />
      </div>
      <div className="wl container">
        <WatchList />
      </div>
    </div>
  );
}
