import cn from 'classnames';
import React from 'react';

import Adresses from '../UI/Adresses';

import styles from './NewsPageBody.module.scss';

import img from '../../assets/images/NewsPage/img.png';
import img2 from '../../assets/images/NewsPage/img2.png';
import Icon from '../UI/Icon';
import SocialIcon from '../UI/SocialIcon';
import Button from '../UI/Button';

const TEXT_CONTENT = ['21 апреля в школе №1 города Барыша состоялся День открытых дверей с участием представителей УлГУ.\n',
  'Ученики  10 класса МОУ СОШ п. Поливаново смогли поучаствовать в мастер-классах «Знакомство с возможностями языка Python».'
  + 'Учащиеся 5 и 6 класса с большим интересом программировали  «Беспилотные летательные аппараты». Учащиеся 9 класса   прослушали '
  + 'лекцию о направлениях обучения в колледже «Сокол» при УлГУ. Спасибо организаторам за интересное мероприятие!'];

const ICON = ['facebook', 'vk', 'instagram', 'share'];

const ADRESSES = ['Главная', 'Новости', 'МОУ СОШ п. Поливаново МО " Барышский район"'];

const NewsPageBody = () => (
  <div className={styles.newsPageBody}>
    <div className={styles.newsPageBody__content}>
      <Adresses className={styles.newsPageBody__adresses} adresses={ADRESSES} />
      <div className={styles.newsPageBody__title}>
        День открытых дверей с УЛГУ
      </div>
      <div className={styles.newsPageBody__info}>
        <div className={styles.newsPageBody__date}>
          22 Апр, 2021
        </div>
        <div className={styles.newsPageBody__people}>
          участников
          <div className={styles.newsPageBody__numberPeople}>
            300
          </div>
        </div>
      </div>
      <div className={styles.newsPageBody__area}>
        <img src={img2} className={styles.newsPageBody__iconImage} alt="icon" />
        МОУ СОШ п. Поливаново МО &quot;Барышский район&quot;
      </div>
      <div>
        { TEXT_CONTENT.map((text) => (
          <div className={styles.newsPageBody__textContent}>{ text }</div>
        ))}
      </div>
      <img src={img} alt="Картинка" className={styles.newsPageBody__mainSlideImg} />
      <div className={styles.newsPageBody__sliderWrapper}>
        <Icon view="arrowPrev" className={cn(styles.newsPageBody__arrow, styles.newsPageBody__arrow_arrowPrev)} />
        { Array.from({ length: 3 }, () => (
          <img src={img} alt="Картинка" className={styles.newsPageBody__sliderImg} />
        ))}
        <Icon view="arrowNext" className={cn(styles.newsPageBody__arrow, styles.newsPageBody__arrow_arrowNext)} />
      </div>
      <div className={styles.newsPageBody__footer}>
        <div>
          <span className={styles.newsPageBody__prevNews}>ПРЕДЫДУЩИЙ ПОСТ</span>
          <span className={styles.newsPageBody__nextNews}>СЛЕДУЮЩИЙ ПОСТ</span>
        </div>
        <div className={styles.newsPageBody__iconWrapper}>
          { ICON.map((icon, index) => (
            <SocialIcon
              key={icon}
              inCircle={ICON.length - 1 !== index}
              className={styles.newsPageBody__circleIcon}
              view={icon}
            />
          ))}
        </div>
      </div>
    </div>
    <div className={styles.newsPageBody__actualNews}>
      <div className={styles.newsPageBody__actualNewsTitle}>Актуальные новости</div>
      {Array.from({ length: 5 }, () => (
        <div className={styles.newsPageBody__newsCard}>
          <img src={img} alt="Картинка" className={styles.newsPageBody__newsCardImg} />
          <div>
            <div className={styles.newsPageBody__newsCardTitle}>
              Занятия код-класса «Процессор»
            </div>
            <div className={styles.newsPageBody__newsCardDate}>14 июнь</div>
          </div>
        </div>
      ))}
      <Button classname={styles.newsPageBody__button}>Показать больше</Button>
    </div>
  </div>
);

export default React.memo(NewsPageBody);
