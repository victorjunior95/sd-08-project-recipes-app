import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import containers from './containers/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ containers.Login } />
      <Route exact path="/comidas" component={ containers.Home } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
