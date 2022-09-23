import React from 'react';
import MoviesList from '../ui/MoviesList';
import SearchMovies from '../ui/SearchMovies';
import WatchList from '../ui/WatchList';

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Películas para mirar</h1>
      <div className={styles.container__content}>
        <div className={styles.container__content__left}>
          <SearchMovies />
          <MoviesList />
        </div>
        <div className={styles.container__content__right}>
          <WatchList />
        </div>
      </div>
    </div>
  );
}
