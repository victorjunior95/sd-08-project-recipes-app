import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Comidas from '../pages/Comidas';
import ProfilePage from '../pages/PerfilPágina';
import Bebidas from '../pages/Bebidas';
import Explore from '../pages/Explorar';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route exact path="/comidas" component={ Comidas } />
    <Route exact path="/comidas/:id/in-progress" />
    <Route exact path="/comidas/:id" />
    <Route exact path="/bebidas" component={ Bebidas } />
    <Route exact path="/bebidas/:id/in-progress" />
    <Route exact path="/bebidas/:id" />
    <Route exact path="/explorar" component={ Explore } />
    <Route exact path="/explorar/comidas" />
    <Route exact path="/explorar/bebidas" />
    <Route exact path="/explorar/comidas/ingredientes" />
    <Route exact path="/explorar/comidas/area" />
    <Route exact path="/explorar/bebidas/ingredientes" />
    <Route exact path="/perfil" component={ ProfilePage } />
    <Route exact path="/receitas-feitas" />
    <Route exact path="/receitas-favoritas" />
  </Switch>
);

export default Routes;
