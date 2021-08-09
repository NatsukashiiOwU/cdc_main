import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/main';
import NewsPage from './pages/news';
import Layout from './layout';
import './styles/components.scss';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route component={MainPage} exact path="/" />
        <Route component={NewsPage} exact path="/news" />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default App;
