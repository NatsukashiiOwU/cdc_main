/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */

import React from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import Icon from '../UI/Icon';

const CardEvent = ({
  className, title, description, image, area, socialLinks, members,
}) => (
  <div className={cn(styles.cardEvent, className)}>
    <img className={styles.cardEvent__image} src={image} alt="eventImage" />
    <div className={styles.cardEvent__content}>
      <div className={styles.cardEvent__title}>
        { title }
      </div>
      <div className={styles.cardEvent__areaWrapper}>
        <img className={styles.cardEvent__iconImage} src={area.image} alt="icon" />
        <div className={styles.cardEvent__area}>{area.text}</div>
      </div>
      <div className={styles.cardEvent__textContent}>{description}</div>
      <div className={styles.cardEvent__interactive}>
        <div className={styles.cardEvent__members}>
          <span className={styles.cardEvent__membersText}>участников</span>
          <span className={styles.cardEvent__membersValue}>{members}</span>
        </div>
        <div className={styles.cardEvent__icons}>
          <Icon inCircle className={styles.cardEvent__circleIcon} link={socialLinks.facebook} view="facebook" />
          <Icon inCircle className={styles.cardEvent__circleIcon} link={socialLinks.vk} view="vk" />
          <Icon inCircle className={styles.cardEvent__circleIcon} link={socialLinks.instagram} view="instagram" />
          <Icon className={styles.cardEvent__circleIcon} view="share" />
        </div>
      </div>
    </div>
  </div>
);

export default CardEvent;
