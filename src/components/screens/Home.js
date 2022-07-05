import MoviesList from "components/ui/MoviesList";
import NavBar from "components/ui/NavBar";
import SearchMovies from "components/ui/SearchMovies";
import WatchList from "components/ui/WatchList";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className='grid grid-cols-6'>
        <div className='col-span-4'>
          <div className="ml-4">
            <SearchMovies />
          </div>
          <MoviesList />
        </div>
        <div className='col-span-2 mr-1'>
          <WatchList />
        </div>
      </div>
    </div>
  )
}