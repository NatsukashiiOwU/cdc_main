import React from 'react';

import styles from './events.module.scss';

import CardEvent from '../../../../components/CardEvent';
import dataCardsEvent from '../../../events/dataCardsEvent';
import NewsMap from '../../../../components/NewsMap';

const NUMBERS = [1, 10];

const Events = () => (
  <>
    {dataCardsEvent.map((card) => (
      <CardEvent
        key={card.id}
        title={card.title}
        isSmall
        className={styles.events__cardEvent}
        description={card.description}
        image={card.image}
        area={card.area}
        socialLinks={card.socialLinks}
        members={card.members}
      />
    ))}
    <NewsMap className={styles.events__newsMap} title="Мероприятий Код классов на странице" numbers={NUMBERS} max="13" />
  </>
);
export default Events;
