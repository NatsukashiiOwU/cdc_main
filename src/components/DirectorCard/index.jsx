/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import cn from 'classnames';
import styles from './DirectorCard.module.scss';

const DirectorCard = ({
  place, img, name, textSchcool, adress, eventCount, userCount,
}) => (
  <div className={styles.directorCard}>
    <div className={styles.directorCard__container}>
      <div className={styles.directorCard__title}>
        <h3>{place}</h3>
      </div>
      <div className={cn(styles.directorCard__individual, styles.directorCard__block)}>
        <div className={styles.directorCard__individualImg}>
          <img src={img} alt={name} />
        </div>
        <div className={styles.directorCard__text}>
          <span>{name}</span>
        </div>
      </div>
      <div className={styles.directorCard__block}>
        <div className={styles.directorCard__titleName}>
          <h4>Название КОД-КЛАССА</h4>
        </div>
        <div className={styles.directorCard__text}>
          <span>{textSchcool}</span>
        </div>
      </div>
      <div className={styles.directorCard__block}>
        <div className={styles.directorCard__titleName}>
          <h4>Адрес клуба</h4>
        </div>
        <div className={styles.directorCard__text}>
          <span>{adress}</span>
        </div>
      </div>
      <div className={styles.directorCard__block}>
        <div className={styles.directorCard__titleName}>
          <h4>Статистика</h4>
        </div>
      </div>
      <div className={styles.directorCard__statisticsBlock}>
        <div className={cn(styles.directorCard__text, styles.directorCard__textStat)}>
          <span>проведено мероприятий</span>
        </div>
        <div className={styles.directorCard__statisticsCount}>
          <span>{eventCount}</span>
        </div>
      </div>
      <div className={styles.directorCard__statisticsBlock}>
        <div className={cn(styles.directorCard__text, styles.directorCard__textStat)}>
          <span>всего участников</span>
        </div>
        <div className={cn(styles.directorCard__statisticsCount, styles.directorCard__nthChild)}>
          <span>{userCount}</span>
        </div>
      </div>
    </div>
  </div>
);

export default memo(DirectorCard);
