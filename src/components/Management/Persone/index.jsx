import React, { memo, useState } from 'react';
import cn from 'classnames';
import styles from './Persone.module.scss';
import Icon from '../../UI/Icon';
import ToolTip from '../../UI/ToolTip';
import Button from '../../UI/Button';

const Persone = ({
  isFirst, codeClass, director, email,
}) => {
  const [cutDirector] = useState(director.split(' '));
  const [checked, setChecked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNameOpen, setIsNameOpen] = useState(false);
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={styles.persone}>
      <div
        className={
          cn(styles.persone__personHeader,
            styles.persone__personHeader_codeClass)
        }
      >
        <input onChange={() => setChecked(!checked)} type="checkbox" className={styles.persone__labelInput} />
        <div
          className={
            cn(styles.persone__checkBox,
              checked && styles.persone__checkBox_checked)
          }
        />
        {codeClass}
      </div>
      <div
        className={
          cn(styles.persone__personHeader,
            styles.persone__personHeader_director)
        }
        onMouseEnter={() => setIsNameOpen(true)}
        onMouseLeave={() => setIsNameOpen(false)}
      >
        {isFirst ? 'Руководитель' : `${cutDirector[0]} ${cutDirector[1]} [...]`}
        {!isFirst
          && (
          <ToolTip isOpen={isNameOpen} className={styles.persone__tooltipName} type="top">
            {director}
          </ToolTip>
          )}
      </div>
      <div className={
        cn(styles.persone__personHeader,
          styles.persone__personHeader_email)
      }
      >
        {email}
      </div>
      <div
        className={cn(styles.persone__personHeader,
          isFirst && styles.persone__personHeader_actions,
          !isFirst && styles.persone__personHeader_burger)}
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        {isFirst
          ? 'Действия'
          : (
            <div>
              <Icon view="burger" />
              <ToolTip isOpen={isMenuOpen} className={styles.persone__tooltipMenu} type="right">
                <Button classname={styles.persone__tooltipButton} type="button" title="Сообщение" />
                <Button classname={styles.persone__tooltipButton} type="button" title="Сбросить пароль" />
                <Button classname={styles.persone__tooltipButton} type="button" title="Удалить" />
              </ToolTip>
            </div>
          )}
      </div>
    </label>
  );
};

export default memo(Persone);
