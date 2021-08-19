import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import Button from '../UI/Button';
import Icon from '../UI/Icon';

import {
  MENULINKS, CHAPTERLINKS, COPYRIGHT, SOCIALLINKS,
} from './Links';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__wrapper}>
      <div className={styles.footer__links}>
        <div className={styles.footer__icons}>
          <div className={styles.footer__logo}>
            <Icon view="logo" />
          </div>
          <div className={styles.footer__linksSocial}>
            {SOCIALLINKS.map((item) => (
              <Icon inCircle className={styles.footer__linkLogo} view={item.img} key={item.img} />
            ))}
          </div>
        </div>
        <div className={styles.footer__linksChapterSite}>
          <div className={styles.footer__linksMenu}>
            <span>Меню</span>
            <ul>
              {MENULINKS.map((item) => (
                <li key={item.title}>
                  <Link to={item.link} className={styles.footer__link}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footer__linksChapter}>
            <ul>
              {CHAPTERLINKS.map((item) => (
                <li key={item.title}>
                  <Link to={item.link} className={styles.footer__link}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.footer__copyright}>
          {COPYRIGHT}
        </div>
      </div>
      <div className={styles.footer__form}>
        <div className={styles.footer__formText}>
          <h3 className={styles.footer__formTitle}>Напишите нам</h3>
          <span className={styles.footer__formDesc}>Мы всегда рады ответить на ваши вопросы</span>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email" className={styles.footer__formEmail}>
            e-mail
            <input type="email" id="email" placeholder="Ваш e-mail" />
          </label>
          <label htmlFor="message" className={styles.footer__formMessage}>
            сообщение
            <textarea id="message" placeholder="Напишите нам" />
          </label>
          <div className={styles.footer__formSubmit}>
            <label htmlFor="name" className={styles.footer__formName}>
              ФИО
              <input type="name" id="name" placeholder="Ваше имя" />
            </label>
            <div className={styles.footer__formButton}>
              <Button type="submit">Отправить </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </footer>
);

export default React.memo(Footer);
