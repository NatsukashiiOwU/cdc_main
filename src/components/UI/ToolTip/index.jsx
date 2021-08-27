import React, { memo } from 'react';
import cn from 'classnames';
import styles from './Tooltip.module.scss';

// eslint-disable-next-line react/prop-types
const Tooltip = ({
  className, isOpen, children, type = 'right',
}) => (
  <div className={cn(className, styles.tooltip, isOpen && styles.tooltip_open, styles[`tooltip_${type}`])}>
    {children}
  </div>
);

export default memo(Tooltip);
