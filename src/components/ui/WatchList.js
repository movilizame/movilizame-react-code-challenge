import { useMoviesContext } from "components/contexts/MoviesContext.js";

export default function WatchList () {
    const { list } = useMoviesContext();
    const { dispatch } = useMoviesContext();

    const deleteItem = (item) => {
        dispatch({
          type: 'deleteItem',
          list: item
        })
    }

    return (
        <div>
            <h1>Mi Lista</h1>
            {list.length > 0 ? 
                (
                    <ul>
                        {list.map(item => (
                            <article>
                                <div>
                                    <h2>{item.original_title}</h2>
                                    <button
                                        className=""
                                        onClick={() => deleteItem(item)}>
                                        X
                                    </button>
                                </div>
                                <hr />
                            </article>
                        ))}
                    </ul>
                )
                : <p>No hay nada en la lista...</p>
            }
        </div>
    )
}