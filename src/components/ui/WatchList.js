import { useMoviesContext } from "components/contexts/MoviesContext.js";

export default function WatchList() {
  const { list } = useMoviesContext();
  const { dispatch } = useMoviesContext();

  const deleteItem = (item) => {
    dispatch({
      type: 'deleteItem',
      list: item
    })
  }

  return (
    <div className='divide-y divide-slate-100'>
      <h1 className='font-bold text-3xl'>Mi Lista</h1>
      {list.length > 0 ?
        (
          <ul className='bg-blue-700 rounded-md'>
            {list.map(item => (
              <article key={item.id} className="">
                <div className="flex m-2 pb-4">
                  <h2 className="font-semibold text-white">{item.original_title}</h2>
                  <button
                    className="ml-auto justify-center w-8 h-6 text-white rounded-lg focus:bg-"
                    onClick={() => deleteItem(item)}>
                    X
                  </button>
                </div>
                <hr className="text-white" />
              </article>
            ))}
          </ul>
        )
        : <ul className="mt-2">No hay nada en la lista...</ul>
      }
    </div>
  )
}