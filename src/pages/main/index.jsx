import React, { memo } from 'react';

import Basics from '../../components/Basics';
import Events from '../../components/mainPage/Events';
import Tasks from '../../components/mainPage/Tasks/index';
import AboutAs from '../../components/mainPage/AboutAs/index';

import styles from './main.scss';

const MainPage = () => (
  <div className={styles.mainPage}>
    <Basics />
    <Tasks />
    <AboutAs />
    <Events />
  </div>
);

export default memo(MainPage);
