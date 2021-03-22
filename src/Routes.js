import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Foods } from './pages';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/comidas" component={ Foods } />
    </Switch>
  );
}
