import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Foods,
  DetailsRecipeDrink,
  DetailsRecipeFood,
  DoneRecipes,
  Drinks,
  ExploreDrinks,
  ExploreFoods,
  ExploreIngredientsFood,
  ExploreRecipes,
  ExploreRegionalFoods,
  FavoriteRecipes,
  Login,
  NotFound,
  Profile,
  ProgressRecipesDrink,
  ProgressRecipesFood,
  ExploreIngredientsDrink,
} from '../pages';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Foods } />
        <Route exact path="/bebidas" component={ Drinks } />
        <Route path="/comidas/:id" component={ DetailsRecipeFood } />
        <Route path="/bebidas/:id" component={ DetailsRecipeDrink } />
        <Route
          path="/comidas/:id/in-progress"
          component={ ProgressRecipesFood }
        />
        <Route
          path="/bebidas/:id/in-progress"
          component={ ProgressRecipesDrink }
        />
        <Route exact path="/explorar" component={ ExploreRecipes } />
        <Route exact path="/explorar/comidas" component={ ExploreFoods } />
        <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
        <Route
          path="/explorar/comidas/ingredientes"
          component={ ExploreIngredientsFood }
        />
        <Route
          path="/explorar/bebidas/ingredientes"
          component={ ExploreIngredientsDrink }
        />
        <Route path="/explorar/comidas/area" component={ ExploreRegionalFoods } />
        <Route path="/perfil" component={ Profile } />
        <Route path="/receitas-feitas" component={ DoneRecipes } />
        <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
        <Route component={ NotFound } />
      </Switch>
    );
  }
}

export default Routes;

// Rotas de exemplos
