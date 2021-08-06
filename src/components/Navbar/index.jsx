/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react-dom';
import styles from './Navbar.module.scss';
import Sprite from '../../assets/sprites/icons.svg';
import navLinks from './Links';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.navbar__links}>
      <ul>
        {navLinks.map((item) => (
          <li>
            <a href="#" className={styles.navbar__link} key={item.img}>
              <div className={styles.navbar__linkIcon}>
                <svg>
                  <use href={`${Sprite}${item.img}`} />
                </svg>
              </div>
              {!!item.title && (
              <div className={styles.navbar__linkTitle}>
                {item.title}
              </div>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
