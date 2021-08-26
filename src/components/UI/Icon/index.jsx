import React from 'react';
import sprite from '../../../assets/sprites/icons.svg';

const Icon = ({
  className,
  view,
}) => (
  <div className={className}>
    <svg>
      <use href={`${sprite}#${view}`} />
    </svg>
  </div>
);

export default React.memo(Icon);
