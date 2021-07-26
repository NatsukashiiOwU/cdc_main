import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/main';

import './styles/components.scss';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route component={MainPage} exact path="/" />
    </Switch>
  </BrowserRouter>
);

export default App;
