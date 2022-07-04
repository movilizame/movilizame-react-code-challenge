import React from "react";
import { useMoviesContext } from "components/contexts/MoviesContext";

export default function MoviesList () {
    // const { dispatch } = useMoviesContext();
    const { movies } = useMoviesContext();
    const imageRoute = 'https://image.tmdb.org/t/p/w500';

    return (
        <div>
            {movies.length > 0 ? 
                (
                    <div>
                        {movies.map(movie => (
                            <article>
                                <img src={imageRoute.concat(movie.poster_path)} alt="" width="70" height="70"/>
                                <div>
                                    <h2>{movie.original_title}</h2>
                                </div>
                            </article>
                        ))}
                    </div>
                )
                :
                <div>
                    <p>No hay nada para mostrar</p>
                </div>
            }
        </div>
    )
}