import React, { memo } from 'react';
import cn from 'classnames';

import styles from './AddNews.module.scss';

import Icon from '../../../../../components/UI/Icon';
import Button from '../../../../../components/UI/Button';

const AddNews = () => (
  <form id="addnews" className={styles.addNews}>
    <div className={styles.addNews__block}>
      <h4 className={styles.addNews__blockTitle}>Дата *:</h4>
      <div className={styles.addNews__addDate}>
        <input className={cn(styles.addNews__dateInput, styles.addNews__input)} type="text" />
        <Icon className={styles.addNews__dateIcon} view="calendar" />
      </div>
    </div>
    <div className={styles.addNews__block}>
      <h4 className={styles.addNews__blockTitle}>Название *:</h4>
      <input className={cn(styles.addNews__nameInput, styles.addNews__input)} placeholder="Ведите назание мероприятия (Напимер: Открытый урок ...)" type="text" />
    </div>
    <div className={styles.addNews__block}>
      <h4 className={styles.addNews__blockTitle}>Содержание *:</h4>
      <textarea className={cn(styles.addNews__contentInput, styles.addNews__input)} type="text" />
    </div>
    <div className={styles.addNews__block}>
      <h4 className={styles.addNews__blockTitle}>Обложка *:</h4>
      <Button type="file" className={styles.addNews__addImg}>
        выбрать фото
      </Button>
    </div>
    <div className={styles.addNews__block}>
      <h4 className={styles.addNews__blockTitle}>Добавить фото *:</h4>
      <Button type="file" className={styles.addNews__addImg}>
        выбрать фото
      </Button>
    </div>
    <div className={styles.addNews__blockSubmit}>
      <Button className={styles.addNews__submitForm} type="addnews">
        ОТПРАВИТЬ НА МОДЕРАЦИЮ
      </Button>
    </div>
    <p className={styles.addNews__subTitleForm}> * Обязательное поле ввода</p>
  </form>
);

export default memo(AddNews);
