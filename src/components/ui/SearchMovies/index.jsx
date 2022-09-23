import React, {
  useState,
} from 'react';

import {
  useDispatch,
} from 'react-redux';

import {
  getMovies,
} from '../../../services/movies';

import {
  searchMovie,
} from '../../../redux/reducers/movies';

import Input from '../components/Input';
import Button from '../components/Button';

import styles from './SearchMovies.module.css';

export default function SearchMovies() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [year, setYear] = useState(0);

  async function gettingMovies() {
    try {
      if (search.length > 0 || year > 0) {
        const response = await getMovies(search, year);
        dispatch(searchMovie(response));
      }
    } catch (error) {
      console.info('error', error);
    }
  }

  return (
    <div className={styles.searchmovies}>
      <p className={styles.searchmovies__title}>
        Buscar
      </p>
      <div className={styles.searchmovies__container}>
        <Input
          label="Título"
          placeholder="Título"
          setValue={setSearch}
          type="text"
          value={search}
        />
        <Input
          label="Año hasta:"
          placeholder="Año hasta:"
          setValue={setYear}
          type="number"
          value={year}
        />
        <div className={styles.searchmovies__container__button}>
          <Button
            onClick={() => gettingMovies()}
            type="button"
          >
            Buscar
          </Button>
        </div>
      </div>
    </div>
  );
}
