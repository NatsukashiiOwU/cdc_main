/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import cn from 'classnames';
import React from 'react-dom';
import styles from './Button.module.scss';

const Button = ({
  className, title, onClick, type,
}) => (
  <button
    type={type}
    className={cn(styles.button, className)}
    onClick={onClick}
  >
    {title}
  </button>
);

export default Button;
