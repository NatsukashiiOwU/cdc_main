import React from 'react';
import cn from 'classnames';
import Sprite from '../../../assets/sprites/icons.svg';
import styles from './Input.module.scss';

const Input = ({
  type,
  name,
  icon,
  placeholder,
  onChange,
  text,
  error,
  props,
}) => (
  <div className={styles.input__label}>
    {!text && <span className={styles.input__errorText}>{error}</span>}
    <input
      {...props}
      type={type}
      className={cn(styles.input, !text && styles.input_error)}
      onChange={onChange}
      name={name}
      value={text}
    />
    <div className={cn(styles.input__placeholder,
      !!text && styles.input__placeholder_none)}
    >
      <div className={styles.input__content}>
        <div className={styles.input__img}>
          <svg>
            <use href={`${Sprite}#${icon}`} />
          </svg>
        </div>
        <div className={styles.input__placeholder_text}>
          {placeholder}
        </div>
      </div>

    </div>
  </div>
);

export default React.memo(Input);
