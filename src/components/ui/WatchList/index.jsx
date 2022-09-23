import React, {
  Fragment,
} from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  clearMovieList,
  deleteMovie,
} from '../../../redux/reducers/movies';

import Button from '../components/Button';
import CardFavorites from '../components/CardFavorites';

import styles from './WatchList.module.css';

export default function WatchList() {
  const {
    moviesList,
  } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteMovie(id));
  }

  function handleClearAll() {
    dispatch(clearMovieList());
  }

  return (
    <>
      <h1 className={styles.container__title}>
        Mi lista
      </h1>
      <div className={styles.container__content}>
        {moviesList ? (moviesList.map((movie) => (
          <Fragment key={movie.id}>
            <CardFavorites
              onClick={() => handleDelete(movie.id)}
              title={movie.title}
            />
          </Fragment>
        ))) : (
          <p className={styles.container__content__empty}>
            Lista vacía
          </p>
        )}
      </div>
      <div className={styles.container__button}>
        {moviesList && moviesList.length > 0 && (
          <Button
            onClick={() => handleClearAll()}
          >
            Eliminar todo
          </Button>
        )}
      </div>
    </>
  );
}
