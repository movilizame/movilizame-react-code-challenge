import MoviesList from '../ui/MoviesList';
import SearchMovies from '../ui/SearchMovies';
import WatchList from '../ui/WatchList';

export default function Home() {
  return (
    <div>
      <div className="text-center text-6xl mb-4 bg-pink-50 p-2">
        <h1>Peliculas para mirar</h1>
      </div>
      <div>
        <SearchMovies />
        <MoviesList />
      </div>
      <div>
        <WatchList />
      </div>
    </div>
  );
}
