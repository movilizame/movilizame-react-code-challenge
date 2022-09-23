import React from 'react';

import {
  useSelector,
} from 'react-redux';

import Button from '../Button';

import DefaultImage from '../../../../assets/default.webp';

import styles from './CardMovie.module.css';

export default function CardMovie({
  id,
  image,
  onClick = () => { },
  popularity,
  score,
  title,
  year,
}) {
  const {
    moviesList,
  } = useSelector((state) => state.movies);

  function isFavorite() {
    return moviesList.filter((movie) => movie.id === id).length > 0;
  }

  return (
    <div className={styles.cardmovie}>
      <img
        alt="title"
        className={styles.image}
        src={image ? `https://image.tmdb.org/t/p/original${image}` : DefaultImage}
      />
      <div className={styles.cardmovie__container}>
        <div className={styles.cardmovie__container__info}>
          <p className={styles.title}>
            {title}
          </p>
          <p>
            {`Año: ${year.slice(0, 4)}`}
          </p>
          <p>
            {`Puntaje: ${score} / Popularidad: ${popularity.toString().split('.')[0]}`}
          </p>
        </div>
      </div>
      <div className={styles.cardmovie__button}>
        <Button
          disabled={moviesList.length > 0 ? isFavorite() : false}
          onClick={() => onClick()}
          type="button"
        >
          Agregar a mi lista
        </Button>
      </div>
    </div>
  );
}
