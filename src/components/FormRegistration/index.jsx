import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import Input from '../UI/Input';
import Button from '../UI/Button';
import styles from './FormRegistration.module.scss';

const FormRegistration = ({ classname }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [university, setUniversity] = useState('');

  const enterName = useCallback((e) => setName(e.target.value), []);
  const enterEmail = useCallback((e) => setEmail(e.target.value), []);
  const enterUniversity = useCallback((e) => setUniversity(e.target.value), []);

  return (
    <div className={cn(styles.formRegistration, classname)}>
      <div className={styles.formRegistration__title}>
        <h2>Здраствуйте!</h2>
        <span>для создания нового КОД-КЛАССА введите информацию </span>
      </div>
      <div className={styles.formRegistration__form}>
        <form onSubmit={(e) => e.preventDefault}>
          <Input
            type="text"
            name="name"
            icon="inputName"
            placeholder="ФИО"
            onChange={enterName}
            text={name}
            error="Заполните поле"
          />
          <Input
            type="e-mail"
            name="email"
            icon="inputEmail"
            placeholder="Email Address"
            onChange={enterEmail}
            text={email}
            error="Заполните поле"
          />
          <Input
            type="text"
            name="university"
            icon="inputVuz"
            placeholder="Образовательное учреждение"
            onChange={enterUniversity}
            text={university}
            error="Заполните поле"
          />
          <Button classname={styles.formRegistration__submit}>
            Создать КОД-КЛАСС
          </Button>
        </form>
      </div>
    </div>

  );
};

export default React.memo(FormRegistration);
