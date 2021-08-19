import React from 'react';
import cn from 'classnames';
import styles from './Modal.module.scss';

const Modal = ({
  children,
  classname,
  isFull,
  isOpen,
}) => (
  <section className={cn(styles.modal,
    isFull && styles.modal__auth,
    !isFull && styles.modal__menu,
    isOpen && styles.modal__isOpen,
    classname)}
  >
    <div className={isFull ? styles.modal__auth_wrapper : styles.modal__menu_wrapper}>
      <div className={styles.modal__content}>
        {children}
      </div>
    </div>
  </section>
);

export default React.memo(Modal);
