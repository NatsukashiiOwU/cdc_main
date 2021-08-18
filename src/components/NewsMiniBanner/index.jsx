/* eslint-disable react/prop-types */
import React from 'react';
import styles from './NewsMiniBanner.module.scss';
import bannerIcon from '../../assets/images/News/Banner/iconBanner.png';

const NewsMiniBanner = ({
  imagePng, title, text,
}) => (
  <section className={styles.newsMiniBanner} style={{ backgroundImage: `url(${imagePng})` }}>
    <div className={styles.newsMiniBanner__contentWrapper}>
      <div className={styles.newsMiniBanner__image}>
        <img src={bannerIcon} alt={title} />
      </div>
      <div className={styles.newsMiniBanner__text}>
        <h1>{title}</h1>
        <span>{text}</span>
      </div>
    </div>
  </section>
);

export default NewsMiniBanner;
