import React, { memo } from 'react';

import styles from './news.module.scss';

import img from '../../../../assets/images/NewsPage/img.png';

import NewsCard from '../../../../components/NewsCard';
import NewsMap from '../../../../components/NewsMap';

const DATA_CARD = [
  {
    title: 'Мастер-класс «Основы проектирования нейронных сетей»',
    date: '22 Апр, 2021',
    image: img,
    description: '21 апреля в школе №1 города Барыша состоялся День открытых дверей с участием представителей УлГУ. Ученики  10 класса […]',
  },
  {
    title: 'Мастер-класс «Основы проектирования нейронных сетей»',
    date: '22 Апр, 2021',
    image: img,
    description: '21 апреля в школе №1 города Барыша состоялся День открытых дверей с участием представителей УлГУ. Ученики  10 класса […]',
  },
  {
    title: 'Мастер-класс «Основы проектирования нейронных сетей»',
    date: '22 Апр, 2021',
    image: img,
    description: '21 апреля в школе №1 города Барыша состоялся День открытых дверей с участием представителей УлГУ. Ученики  10 класса […]',
  },
];

const NUMBERS = [1, 10];

const News = () => (
  <>
    {DATA_CARD.map((item) => (
      <NewsCard
        key={item.id}
        isSmall
        className={styles.news__newsCard}
        title={item.title}
        date={item.date}
        image={img}
        description={item.description}
      />
    ))}
    <NewsMap className={styles.news__newsMap} title="Новостей Код классов на странице" numbers={NUMBERS} max="13" />
  </>
);

export default memo(News);
