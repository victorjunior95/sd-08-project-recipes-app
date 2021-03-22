import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Perfil from './pages/Perfil';
import Bebidas from './pages/Bebidas';
import Explorar from './pages/Explorar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/comidas" component={ Comidas } />
      <Route path="/perfil" component={ Perfil } />
      <Route path="/receitas-feitas" component={ Perfil } />
      <Route path="/receitas-favoritas" component={ Perfil } />
      <Route path="/bebidas" component={ Bebidas } />
      <Route path="/explorar" component={ Explorar } />
    </Switch>
  );
}

export default App;
