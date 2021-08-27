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
    !isFull && styles.modal_small,
    isFull && styles.modal_full,
    isOpen && styles.modal_isOpen,
    classname)}
  >
    <div className={styles.modal__content}>
      {children}
    </div>
  </section>
);

export default React.memo(Modal);
