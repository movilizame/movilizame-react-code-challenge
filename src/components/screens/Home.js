import MoviesList from '../ui/MoviesList';
import SearchMovies from '../ui/SearchMovies';
import WatchList from '../ui/WatchList';

export default function Home() {
  return (
    <div>
      <div className="text-center text-6xl mb-4 bg-pink-50 p-2">
        <h1>Peliculas para mirar</h1>
      </div>
      <div className="flex flex-wrap">
        <div>
          <SearchMovies />
          <MoviesList />
        </div>
        <div className="flex flex-wrap ml-60 mb-4">
          <WatchList />
        </div>
      </div>
    </div>
  );
}
