import React from 'react-dom';
import Banner from '../../components/UI/Banner';

import BannerWebp from '../../assets/images/News/Banner/Banner.webp';
import BannerPng from '../../assets/images/News/Banner/Banner.png';

const NewsPage = () => (
  <Banner
    imageWebp={BannerWebp}
    imagePng={BannerPng}
    title="Новости"
  />
);

export default NewsPage;
