export default function SearchMovies() {
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
        <button>Buscar</button>
      </form>
    </div>
  );
}
