import React, { memo } from 'react';
import logo from '../../logo.svg';

import styles from './main.scss';

const MainPage = () => (
  <div className={styles.mainPage}>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit
        {' '}
        <code>src/App.js</code>
        {' '}
        and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default memo(MainPage);
