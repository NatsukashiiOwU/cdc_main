/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react-dom';
import cn from 'classnames';
import styles from './Button.module.scss';

const Button = ({
  classname, title, onClick, type,
}) => (
  <button
    type={type}
    className={cn(styles.button, classname)}
    onClick={onClick}
  >
    {title}
  </button>
);

export default Button;
