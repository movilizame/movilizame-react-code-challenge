import { useMoviesContext } from "components/contexts/MoviesContext.js";

export default function WatchList () {
    const { list } = useMoviesContext();
    const { dispatch } = useMoviesContext();

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
                                    <button>X</button>
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