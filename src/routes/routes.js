import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route to="/" component={ Login } />
        <Route to="/comidas" component={ Foods } />
        <Route to="/bebidas" component={ Drinks } />
        <Route to="/comidas/:id" component={ FoodDetails } />
        <Route to="/bebidas/:id" component={ DrinkDetails } />
        <Route to="/comidas/:id/in-progress" component={ FoodInProgress } />
        <Route to="/bebidas/:id/in-progress" component={ DrinkInProgress } />
        <Route to="/explorar" component={ Explorer } />
        <Route to="/explorar/comidas" component={ ExplorerFood } />
        <Route to="/explorar/bebidas" component={ ExplorerDrink } />
        <Route
          to="/explorar/comidas/ingredientes"
          component={ ExplorerFoodsIngredients }
        />
        <Route
          to="/explorar/bebidas/ingredientes"
          component={ ExplorerDrinksIngredients }
        />
        <Route to="/explorar/comidas/area" component={ ExplorerFoodsRegion } />
        <Route to="/perfil" component={ Profile } />
        <Route to="/receitas-feitas" component={ DoneRecipes } />
        <Route to="/receitas-favoritas" component={ FavRecipes } />
      </Switch>
    </BrowserRouter>
  );
}

export default routes;
