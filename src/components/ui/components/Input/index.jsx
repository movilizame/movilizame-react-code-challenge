import React from 'react';

import styles from './Input.module.css';

export default function InputSearch({
  label,
  placeholder,
  setValue,
  type = 'text',
  value,
}) {
  return (
    <div className={styles.input__container}>
      <p className={styles.input__container__label}>
        {label}
      </p>
      <input
        className={styles.input__container__input}
        min={type === 'number' ? 0 : null}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>
  );
}
