/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import cn from 'classnames';
import Button from '../UI/Button';

import styles from './AddCard.module.scss';

const AddCard = ({ title, className, href }) => (
  <div className={cn(styles.addCard, className)}>
    <Button classname={styles.addCard__button} href={href} title={title} />
  </div>
);

export default memo(AddCard);
