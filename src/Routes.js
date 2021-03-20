import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import containers from './containers/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ containers.Login } />
      <Route exact path="/comidas" component={ containers.MainFood } />
      <Route exact path="/bebidas" component={ containers.Drinks } />
      <Route exact path="/explorar" component={ containers.Explore } />
      <Route exact path="/Profile" component={ containers.Profile } />
      <Route exact path="/receitas-feitas" component={ containers.DoneRecipes } />
      <Route exact path="/receitas-favoritas" component={ containers.FavoriteRecipes } />
    </Switch>
  </BrowserRouter>
);

// Tela de detalhes de uma receita de comida: /comidas/{id-da-receita};
// Tela de detalhes de uma receita de bebida: /bebidas/{id-da-receita};
// Tela de receita em processo de comida: /comidas/{id-da-receita}/in-progress;
// Tela de receita em processo de bebida: /bebidas/{id-da-receita}/in-progress;
// Tela de explorar comidas por ingrediente: /explorar/comidas/ingredientes;
// Tela de explorar bebidas por ingrediente: /explorar/bebidas/ingredientes;
// Tela de explorar comidas por local de origem: /explorar/comidas/area;

export default Routes;
