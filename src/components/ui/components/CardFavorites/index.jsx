import React from 'react';

import {
  AiOutlineClose,
} from 'react-icons/ai';

import Button from '../Button';

import styles from './CardFavorites.module.css';

export default function CardFavorites({
  onClick = () => { },
  title,
}) {
  return (
    <div className={styles.container}>
      <p className={styles.container__title}>
        {title}
      </p>
      <Button
        className={styles.container__button}
        icon
        onClick={() => onClick()}
        type="button"
      >
        <AiOutlineClose className={styles.container__button__icon} />
      </Button>
    </div>
  );
}
