import { useState } from 'react';
import { getMovies } from '../../services/movies';

export default function SearchMovies() {
  const [title, setTitle] = useState('');
  const onSubmit = async (e) => {
    e.preventDefault();
    let movies = await getMovies('padrino');
    movies = movies.results;
    console.log(movies);
  };
  return (
    <div>
      <form className=" flex flex-row items-end">
        <div className="flex mt-100 mr-15 mx-1 ">
          <p>Titulo</p>
          <input type="search" placeholder="Ingrese titulo" />
        </div>
        <div>
          <p>Año</p>
          <input type="number" placeholder="Ingrese año" />
        </div>
        <button onClick={onSubmit}>Buscar</button>
      </form>
    </div>
  );
}
