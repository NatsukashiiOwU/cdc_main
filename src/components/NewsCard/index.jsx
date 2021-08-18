/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import cn from 'classnames';
import styles from './NewsCard.module.scss';
import Button from '../UI/Button';
import Icon from '../UI/Icon';

const ICON = ['facebook', 'vk', 'instagram', 'share'];

const NewsCard = ({
  className, title, area, date, description, image, smallImage, isSmall,
}) => (
  <div className={cn(styles.newsCard, className, isSmall && styles.newsCard__isSmall)}>
    <img className={styles.newsCard__image} src={image} alt={title} />
    <div className={styles.newsCard__content}>
      <div className={styles.newsCard__title}>
        { title }
      </div>
      {!isSmall && (
      <div className={styles.newsCard__areaWrapper}>
        <img className={styles.newsCard__iconImage} src={smallImage} alt={title} />
        <div className={styles.newsCard__area}>{ area }</div>
      </div>
      )}
      <div>
        <div className={styles.newsCard__textContent}>{ date }</div>
        <div className={styles.newsCard__textContent}>{ description }</div>
      </div>
      <div className={styles.newsCard__buttonWrapper}>
        <Button classname={styles.newsCard__button} title="Читать" />
        <div className={styles.newsCard__icons}>
          {
            ICON.map((icon, index) => (
              ICON.length - 1 !== index ? (
                <Icon inCircle className={styles.newsCard__circleIcon} view={icon} />
              ) : (
                <Icon className={styles.newsCard__circleIcon} view={icon} />
              )
            ))
          }
        </div>
      </div>
    </div>
  </div>
);

export default NewsCard;
