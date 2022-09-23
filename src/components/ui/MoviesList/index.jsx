import React, {
  Fragment,
} from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  addMovie,
} from '../../../redux/reducers/movies';

import CardMovie from '../components/CardMovie';

export default function MoviesList() {
  const {
    moviesSearched,
  } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const handleAddMovie = (movie) => {
    dispatch(addMovie({
      id: movie.id,
      title: movie.title,
    }));
  };

  return (
    <div>
      {
        moviesSearched && moviesSearched.map((movie) => (
          <Fragment key={movie.id}>
            <CardMovie
              id={movie.id}
              image={movie.poster_path}
              onClick={() => handleAddMovie(movie)}
              popularity={movie.popularity}
              score={movie.vote_average}
              title={movie.title}
              year={movie.release_date}
            />
          </Fragment>
        ))
      }
    </div>
  );
}
