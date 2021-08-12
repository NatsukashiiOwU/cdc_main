/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

const Button = ({
  classname, title, onClick, type, icon,
}) => (
  <button
    type={type}
    className={cn(styles.button, classname)}
    onClick={onClick}
  >
    {icon ? (
      <img src={icon} />
    ) : title}
  </button>
);

export default Button;
