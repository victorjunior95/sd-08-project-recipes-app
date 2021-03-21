import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import containers from './containers/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ containers.Login } />
      <Route exact path="/comidas" component={ containers.MainFood } />
      <Route exact path="/comidas/:id" component={ containers.FoodDetails } />
      <Route
        exact
        path="/comidas/:id/in-progress"
        component={ containers.FoodDetailsInProgress }
      />
      <Route
        exact
        path="/bebidas"
        component={ containers.Drinks }
      />
      <Route exact path="/bebidas/:id" component={ containers.DrinkDetails } />
      <Route
        exact
        path="/bebidas/:id/in-progress"
        component={ containers.DrinkDetainsInProgress }
      />
      <Route exact path="/explorar" component={ containers.Explore } />
      <Route exact path="/profile" component={ containers.Profile } />
      <Route exact path="/receitas-feitas" component={ containers.DoneRecipes } />
      <Route exact path="/receitas-favoritas" component={ containers.FavoriteRecipes } />
      <Route exact path="/explorar/comidas" component={ containers.ExploreFoods } />
      <Route exact path="/explorar/bebidas" component={ containers.ExploreDrinks } />
      <Route
        exact
        path="/explorar/comidas/ingredientes"
        component={ containers.ExploreFoodsByIngredients }
      />
      <Route
        exact
        path="/explorar/bebidas/ingredientes"
        component={ containers.ExploreDrinksByIngredients }
      />
      <Route exact path="/explorar/comidas/area" component={ containers.Explore } />
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
