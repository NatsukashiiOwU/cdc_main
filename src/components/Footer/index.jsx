/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-restricted-globals */
import React from 'react-dom';
import styles from './Footer.module.scss';
import Button from '../UI/Button';
import Sprite from '../../assets/sprites/icons.svg';

import {
  menuLinks, chapterLinks, copyright, socialLinks,
} from './Links';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__wrapper}>
      <div className={styles.footer__links}>
        <div className={styles.footer__icons}>
          <div className={styles.footer__logo}>
            <svg>
              <use href={`${Sprite}#logo`} />
            </svg>
          </div>
          <div className={styles.footer__linksSocial}>
            {socialLinks.map((item) => (
              <div className={styles.footer__linkLogo}>
                <svg>
                  <use href={`${Sprite}${item.img}`} />
                </svg>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.footer__linksChapterSite}>
          <div className={styles.footer__linksMenu}>
            <span>Меню</span>
            <ul>
              {menuLinks.map((item) => (
                <li>
                  <a href="#" className={styles.footer__link}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footer__linksChapter}>
            <ul>
              {chapterLinks.map((item) => (
                <li>
                  <a href={item.link} className={styles.footer__link}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.footer__copyright}>
          {copyright}
        </div>
      </div>
      <div className={styles.footer__form}>
        <div className={styles.footer__formText}>
          <h3 className={styles.footer__formTitle}>
            Напишите нам
          </h3>
          <span className={styles.footer__formDesc}>
            Мы всегда рады ответить на ваши вопросы
          </span>
        </div>
        <form>
          <label className={styles.footer__formEmail}>
            e-mail
            <input type="email" placeholder="Ваш e-mail" />
          </label>
          <label className={styles.footer__formMessage}>
            сообщение
            <textarea placeholder="Напишите нам" />
          </label>
          <div className={styles.footer__formSubmit}>
            <label className={styles.footer__formName}>
              ФИО
              <input type="name" placeholder="Ваше имя" />
            </label>
            <div className={styles.footer__formButton}>
              <Button type="submit" title="Отправить" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </footer>

);

export default Footer;
