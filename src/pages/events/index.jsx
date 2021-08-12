import React, { memo } from 'react';
import Adresses from '../../components/UI/Adresses';
import Search from '../../components/UI/Search';
import CardEvent from '../../components/CardEvent';
import NewsMap from '../../components/NewsMap';
import Banner from '../../components/UI/Banner';
import BannerHead from '../../assets/images/pageEvents/banner.png';
import styles from './styles.module.scss';

import dataCardsEvent from './dataCardsEvent';

const PageEvents = () => (
  <>
    <Banner imagePng={BannerHead} title="Мероприятия" />
    <div className={styles.events}>
      <div className={styles.events__content}>
        <Adresses adresses={['Главная', 'МЕРОПРИЯТИЯ']} className={styles.events__map} />
        <Search placeholder="Поиск" className={styles.events__search} />
        {dataCardsEvent.map((card) => (
          <CardEvent
            className={styles.events__card}
            title={card.title}
            description={card.description}
            image={card.image}
            area={card.area}
            socialLinks={card.socialLinks}
            members={card.members}
          />
        ))}
        <NewsMap title="Код классов на странице" numbers={[3, 5, 10]} max="13" />
      </div>
    </div>
  </>
);

export default memo(PageEvents);
