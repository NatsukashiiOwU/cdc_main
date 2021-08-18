import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/main';
import NewsPage from './pages/news';
import PageEvents from './pages/events';
import ListPage from './pages/listPage';
import CodeClassesDetail from './pages/code-classes/detail';

import massMediaAboutPage from './pages/massMediaAboutPage';
import Layout from './layout';
import './styles/components.scss';
import './App.css';

const App = () => (
  <BrowserRouter basename={process.env.REACT_APP_ROUTER_BASENAME}>
    <Layout>
      <Switch>
        <Route component={MainPage} exact path="/" />
        <Route component={NewsPage} exact path="/news" />
        <Route component={PageEvents} exact path="/events" />
        <Route component={ListPage} exact path="/code-classes" />
        <Route component={massMediaAboutPage} exact path="/about" />
        <Route component={CodeClassesDetail} path="/code-classes/detail" />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
