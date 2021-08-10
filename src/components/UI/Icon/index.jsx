import cn from 'classnames';
import React from 'react';

import styles from './Icon.module.scss';

// eslint-disable-next-line import/no-unresolved
import Sprite from '../../../assets/sprites/icons.svg';

// eslint-disable-next-line react/prop-types
const Icon = ({ className, view, inCircle }) => (
  <div className={cn(className, styles.icon)}>
    <div className={inCircle && styles.icon__circle}>
      <div className={styles.icon__icon}>
        <svg>
          <use href={`${Sprite}#${view}`} />
        </svg>
      </div>
    </div>
  </div>
);

export default React.memo(Icon);
