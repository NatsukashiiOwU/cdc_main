import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/main';
import Layout from './layout';
import './styles/components.scss';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route component={MainPage} exact path="/" />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default App;
