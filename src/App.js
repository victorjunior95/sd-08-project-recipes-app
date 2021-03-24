import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Perfil from './pages/Perfil';
import Bebidas from './pages/Bebidas';
import Explorar from './pages/Explorar';
import DetalhesComidas from './pages/DetalhesComidas';
import DetalhesBebidas from './pages/DetalhesBebidas';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarBebidas from './pages/ExplorarBebidas';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Comidas } />
      <Route exact path="/perfil" component={ Perfil } />
      <Route exact path="/receitas-feitas" component={ Perfil } />
      <Route exact path="/receitas-favoritas" component={ Perfil } />
      <Route exact path="/bebidas" component={ Bebidas } />
      <Route exact path="/explorar" component={ Explorar } />
      <Route path="/comidas/:id" component={ DetalhesComidas } />
      <Route path="/bebidas/:id" component={ DetalhesBebidas } />
      <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
      <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
    </Switch>
  );
}

export default App;
