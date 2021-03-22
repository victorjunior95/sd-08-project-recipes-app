import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  return (
    <Switch>
      <Route path="/bebidas" component={ Main } />
      <Route path="/comidas" component={ Main } />
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default App;
