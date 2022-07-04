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
                            <article key={movie.id}>
                                <img src={imageRoute.concat(movie.poster_path)} alt="" width="70" height="70"/>
                                <div>
                                    <h2>{movie.original_title}</h2>
                                    <dl>
                                        <div>
                                            <dd>{movie.vote_average}</dd>
                                        </div>
                                        <div>
                                            <dt>Language</dt>
                                            <dd>{movie.original_language.toUpperCase()}</dd>
                                        </div>
                                        <div>
                                            <dt>Year</dt>
                                            <dd>{new Date(movie.release_date).getFullYear()}</dd>
                                        </div>
                                        <div>
                                            <dt>Popularity</dt>
                                            <dd>Popularidad: {Math.trunc(movie.popularity)}</dd>
                                        </div>
                                    </dl>
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