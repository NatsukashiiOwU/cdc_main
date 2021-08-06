/* eslint-disable react/prop-types */
import React from 'react-dom';
import styles from './Layout.module.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
