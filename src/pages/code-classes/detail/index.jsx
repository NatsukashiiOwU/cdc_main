/* eslint-disable camelcase */
import React, { memo } from 'react';
import Banner from '../../../components/UI/Banner';
import Toggle from '../../../components/Toggle';
import Adresses from '../../../components/UI/Adresses';

import img_banner_png from '../../../assets/images/News/Banner/BannerCdc.png';
import img_banner_webp from '../../../assets/images/News/Banner/BannerCdc.webp';
import img_mini from '../../../assets/images/News/Banner/NewsBannerMini.png';
import NewsMiniBanner from '../../../components/NewsMiniBanner';
import DirectorCard from '../../../components/DirectorCard';

import styles from './NewsCdc.module.scss';
import RouteAddNews from '../../../components/RouteAddNews';
import RouteAddEvents from '../../../components/RouteAddEvents';
import Profile from './profile';

const route = [
  {
    id: '0',
    title: 'Мероприятия',
    path: '/code-classes/detail/events',
    exact: false,
    Page: RouteAddEvents,
  },
  {
    id: '1',
    title: 'Новости',
    exact: false,
    path: '/code-classes/detail/news',
    Page: RouteAddNews,
  },
  {
    id: '2',
    title: 'Профиль',
    exact: false,
    path: '/code-classes/detail/profile',
    Page: Profile,
  },
];

const ADDRESS_TITLE = ['Главная', 'Код классы', 'МОУ СОШ п. Поливаново МО " Барышский район', 'Новости Код-класса'];

const CodeClassesDetail = () => (
  <div className={styles.codeClassesDetail}>
    <Banner
      imagePng={img_banner_png}
      imageWebp={img_banner_webp}
      title="Список КОД-КЛАССОВ"
    />
    <div className={styles.codeClassesDetail__container}>
      <Adresses className={styles.codeClassesDetail__adress} adresses={ADDRESS_TITLE} />
      <div className={styles.codeClassesDetail__wrapper}>
        <div className={styles.codeClassesDetail__banners}>
          <NewsMiniBanner
            imgBanWebp={img_mini}
          />
          <Toggle
            items={route}
            className={styles.codeClassesDetail__toggle}
          />
        </div>
        <div className={styles.codeClassesDetail__card}>
          <DirectorCard
            place="Руководитель клуба"
            name="ФИО"
            eventCount="0"
            userCount="0"
          />
        </div>
      </div>
    </div>
  </div>
);

export default memo(CodeClassesDetail);
