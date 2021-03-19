import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Foods from './pages/Foods';

export default function Routes() {
  return (
    <Switch>
      <Route path="/comidas" component={ Foods } />
      <Route path="/" component={ Login } />
    </Switch>
  );
}
