/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './Activity.module.scss';

import Search from '../../UI/Search';

const links = ['Активность', 'Новые', 'По алфавиту'];

const Activity = () => (
  <div className={styles.activity}>
    <div className={styles.activity__length}>
      <div className={styles.activity__lengthTitle}>
        Все участники
      </div>
      <div className={styles.activity__lengthNumber}>
        48
      </div>
    </div>
    <div className={styles.activity__links}>
      <ul>
        {links.map(((item) => (
          <li>
            <a href="#" className={styles.activity__itemLink}>{item}</a>
          </li>
        )))}
      </ul>
    </div>
    <Search className={styles.activity__search} placeholder="Поиск" />
  </div>
);

export default Activity;
