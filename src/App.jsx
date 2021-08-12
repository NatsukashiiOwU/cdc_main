import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/main';
import NewsPage from './pages/news';
import PageEvents from './pages/events';
import ListPage from './pages/listPage';
import Layout from './layout';
import './styles/components.scss';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route component={MainPage} exact path="/" />
        <Route component={NewsPage} exact path="/news" />
        <Route component={PageEvents} exact path="/events" />
        <Route component={ListPage} exact path="/code-classes" />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default App;
