import React from 'react';
import cn from 'classnames';
import styles from './Modal.module.scss';

const Modal = ({
  children,
  classname,
  isAuth,
  isOpen,
}) => (
  <section className={cn(styles.modal,
    isAuth && styles.modal__auth,
    !isAuth && styles.modal__menu,
    isOpen && styles.modal__isOpen,
    classname)}
  >
    <div className={isAuth ? styles.modal__auth_wrapper : styles.modal__menu_wrapper}>
      <div className={styles.modal__content}>
        {children}
      </div>
    </div>
  </section>
);

export default React.memo(Modal);
