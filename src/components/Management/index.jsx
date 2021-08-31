import React, { memo, useState } from 'react';
import cn from 'classnames';
import Button from '../UI/Button';
import NewsMap from '../UI/NewsMap';
import Persone from './Persone';
import styles from './Management.module.scss';

const CONTENT = [
  {
    codeClass: 'МБОУ СОШ №1 МО "Барышский район"',
    director: 'Толстик Татьяна Викторовна',
    email: ' sosh_inform@mail.ru',
  },
  {
    codeClass: 'МБОУ СОШ №1 МО "Барышский район"',
    director: 'Толстик Татьяна Викторовна',
    email: ' sosh_inform@mail.ru',
  },
  {
    codeClass: 'МБОУ СОШ №1 МО "Барышский район"',
    director: 'Толстик Татьяна Викторовна',
    email: ' sosh_inform@mail.ru',
  },
  {
    codeClass: 'МБОУ СОШ №1 МО "Барышский район"',
    director: 'Толстик Татьяна Викторовна',
    email: ' sosh_inform@mail.ru',
  },
  {
    codeClass: 'МБОУ СОШ №1 МО "Барышский район"',
    director: 'Толстик Татьяна Викторовна',
    email: ' sosh_inform@mail.ru',
  },
  {
    codeClass: 'МБОУ СОШ №1 МО "Барышский район"',
    director: 'Толстик Татьяна Викторовна',
    email: ' sosh_inform@mail.ru',
  },
];
const NUMBERS = [1, 10];

const Management = () => {
  const [isMailOpen, setIsMailOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className={cn(styles.management, isMailOpen && styles.management_letterOpen)}>
      <Button className={styles.management__button} onClick={() => setIsMailOpen(true)}>
        ОТПРАВИТЬ ПИСЬМО участникам
      </Button>
      <div className={cn(styles.management__letter, isMailOpen && styles.management__letter_open)}>
        <div className={styles.management__letterTitle}>
          Отправка письма партнерам
        </div>
        <input
          type="text"
          className={styles.management__input}
          placeholder="Тема письма:"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <textarea
          className={cn(styles.management__input, styles.management__input_content)}
          placeholder="Текст письма: "
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <div className={styles.management__addFiles}>
          Файлы:
          <Button type="file" className={styles.management__buttonFile}>выбрать файл</Button>
          <Button type="file" className={styles.management__buttonFile}>выбрать файл</Button>
          <Button type="file" className={styles.management__buttonFile}>выбрать файл</Button>
        </div>
      </div>
      <div className={styles.management__content}>
        <Persone isFirst codeClass="Код классы" director="Руководитель" email="E-mail" />
        {CONTENT.map((persone) => (
          <Persone
            codeClass={persone.codeClass}
            director={persone.director}
            email={persone.email}
          />
        ))}
      </div>
      <NewsMap className={styles.management__map} title="Мероприятий Код классов на странице" numbers={NUMBERS} max="13" />
    </div>
  );
};

export default memo(Management);
