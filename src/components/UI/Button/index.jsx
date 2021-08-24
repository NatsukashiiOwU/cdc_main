import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import styles from './Button.module.scss';

const Button = ({
  children, classname, onClick, type, icon, href,
}) => (
  href ? (
    <Link className={cn(styles.button, styles.button__link, classname)} to={href}>{children}</Link>
  ) : (
    <button
      type={type}
      className={cn(styles.button, classname)}
      onClick={onClick}
    >
      {icon ? (
        <img src={icon} alt={children} />
      ) : children}
    </button>
  )
);

export default React.memo(Button);
