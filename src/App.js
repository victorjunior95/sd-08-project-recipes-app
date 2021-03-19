import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Provider from './context/Provider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comidas from './pages/Comidas';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Comidas } /> 
      </Switch>
    </Provider>
  );
}

export default App;
