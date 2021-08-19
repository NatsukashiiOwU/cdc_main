import React from 'react';
import cn from 'classnames';
import styles from './Article.module.scss';

import Vector from '../../../assets/images/SMI/Vector.png';

const Article = ({
  title,
  date,
  cityName,
  textTitle,
  textDescription,
  image,
}) => (
  <div className={styles.article}>
    <div className={styles.article__wrapper}>
      <h3 className={styles.article__articleName}>
        {title}
      </h3>
      <div className={styles.article__date}>
        <img src={Vector} alt="vector" />
        <div className={styles.article__dateText}>
          {date}
        </div>
        |
        <div className={styles.article__cityName}>
          {cityName}
        </div>
      </div>
      <div className={styles.article__textTitle}>
        {textTitle}
      </div>
      <div
        className={styles.article__textDescription}
        dangerouslySetInnerHTML={{ __html: textDescription }}
      />
    </div>
    <div className={cn(styles.article__pictureWrapper, {
      [styles.article__manyPictureWrapper]: image.length > 3,
    })}
    >
      {image.map((img) => (
        <picture>
          <source srcSet={img.imgWebp} type="image/webp" />
          <img src={img.imgPng} alt={title} />
        </picture>
      ))}
    </div>
  </div>
);

export default Article;
