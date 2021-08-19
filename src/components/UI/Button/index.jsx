import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

const Button = ({
  classname,
  onClick,
  type,
  children,
  props,
}) => (
  <button
    {...props}
    type={type}
    className={cn(styles.button, classname)}
    onClick={onClick}
  >
    {children}
  </button>
);

export default React.memo(Button);
