import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import ProfilePage from './pages/ProfilePage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route exact path="/comidas" />
    <Route exact path="/bebidas" />
    <Route exact path="/comidas/{id-da-receita}" />
    <Route exact path="/bebidas/{id-da-receita}" />
    <Route exact path="/comidas/{id-da-receita}/in-progress" />
    <Route exact path="/bebidas/{id-da-receita}/in-progress" />
    <Route exact path="/explorar" />
    <Route exact path="/explorar/comidas" />
    <Route exact path="/explorar/bebidas" />
    <Route exact path="/explorar/comidas/ingredientes" />
    <Route exact path="/explorar/bebidas/ingredientes" />
    <Route exact path="/explorar/comidas/area" />
    <Route exact path="/perfil" component={ ProfilePage } />
    <Route exact path="/receitas-feitas" />
    <Route exact path="/receitas-favoritas" />
  </Switch>
);

export default Routes;
