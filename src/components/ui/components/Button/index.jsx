import React from 'react';

import styles from './Button.module.css';

export default function Button({
  children,
  disabled,
  icon,
  onClick = () => { },
  type = 'button',
}) {
  return (
    <button
      className={styles.button}
      disabled={disabled}
      onClick={() => onClick()}
      style={{
        borderRadius: icon && '50%',
        width: icon && '36px',
        height: icon && '36px',
      }}
      type={type}
    >
      {children}
    </button>
  );
}
