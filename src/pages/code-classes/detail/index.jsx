/* eslint-disable camelcase */
import React, { memo } from 'react';
import Banner from '../../../components/UI/Banner';
import Adresses from '../../../components/UI/Adresses';

import img_banner_png from '../../../assets/images/News/Banner/BannerCdc.png';
import img_banner_webp from '../../../assets/images/News/Banner/BannerCdc.webp';
import img_mini from '../../../assets/images/News/Banner/NewsBannerMini.png';
import avatar from '../../../assets/images/NewsPage/directorAvatar.png';
import NewsMiniBanner from '../../../components/NewsMiniBanner';
import DirectorCard from '../../../components/DirectorCard';
import Toggle from '../../../components/Toggle';

import styles from './NewsCdc.module.scss';
import Events from './events';
import News from './news';

const route = [
  {
    id: '0',
    title: 'Мероприятия',
    path: '/code-classes/detail/events',
    Page: Events,
  },
  {
    id: '1',
    title: 'Новости',
    path: '/code-classes/detail/news',
    Page: News,
  },
];

const ADDRESS_TITLE = ['Главная', 'Код классы', 'МОУ СОШ п. Поливаново МО " Барышский район', 'Новости Код-класса'];

const CodeClassesDetail = () => (
  <div className={styles.newsCdc}>
    <Banner
      imagePng={img_banner_png}
      imageWebp={img_banner_webp}
      title="Список КОД-КЛАССОВ"
    />
    <div className={styles.newsCdc__container}>
      <Adresses className={styles.newsCdc__adress} adresses={ADDRESS_TITLE} />
      <div className={styles.newsCdc__wrapper}>
        <div className={styles.newsCdc__banners}>
          <NewsMiniBanner
            imagePng={img_mini}
            imgBanWebp={img_mini}
            title="Код класс “СОВЯТА"
            text="МБОУ «Средняя школа №72 с углубленным изучением отдельных предметов» Ульяновск"
          />
          <Toggle
            items={route}
            className={styles.newsCdc__toggle}
          />
        </div>
        <div className={styles.newsCdc__card}>
          <DirectorCard
            place="Руководитель клуба"
            img={avatar}
            name="Газизова Лениза Ривальевна"
            textSchcool="МБОУ «Средняя школа №72 с углубленным изучением отдельных предметов» Ульяновск"
            adress="г. Ульяновск, ул. Карбышева, д. 26"
            eventCount="25"
            userCount="14257"
          />
        </div>
      </div>
    </div>
  </div>
);

export default memo(CodeClassesDetail);
