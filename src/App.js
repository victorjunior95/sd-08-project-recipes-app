import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Comida from './pages/Comida';

function App() {
  return (
    <Switch>
      <Route path="/comidas" component={ Comida } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
