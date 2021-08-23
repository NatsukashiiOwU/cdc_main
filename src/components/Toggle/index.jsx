/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames';
import {
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import styles from './Toggle.module.scss';

const Toggle = ({ items, className }) => (
  <div className={styles.toggle}>
    <nav className={cn(styles.toggle__menu, className)}>
      <ul className={styles.toggle__menuItems}>
        {items.map((item) => (
          <li
            key={item.id}
            className={styles.toggle__menuItem}
          >
            <NavLink activeClassName={styles.toggle__active} to={item.path}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
    <Switch>
      {items.map(({ Page, path, exact = true }) => (
        <Route key={path} path={path} exact={exact} component={Page} />
      ))}
    </Switch>
  </div>
);

export default Toggle;
