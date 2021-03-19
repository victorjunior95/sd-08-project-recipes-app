import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Provider from './context/Provider';

// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { DrinkDetails, DrinkInProgress, Drinks } from './pages/Drinks';
import { FoodDetails, FoodInProgress, Foods } from './pages/Foods';
import {
  Explore,
  ExploreByOrigin,
  ExploreDrinks,
  ExploreDrinksByIngredient,
  ExploreFoods,
  ExploreFoodsByIngredient,
} from './pages/Explore';
import { RecipesDone, RecipesFavorite } from './pages/Recipes';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          <Route path="/comidas/:id/in-progress" component={ FoodInProgress } />
          <Route path="/bebidas/:id/in-progress" component={ DrinkInProgress } />
          <Route path="/comidas/:id" component={ FoodDetails } />
          <Route path="/bebidas/:id" component={ DrinkDetails } />
          <Route
            path="/explorar/comidas/ingredientes"
            component={ ExploreFoodsByIngredient }
          />
          <Route
            path="/explorar/bebidas/ingredientes"
            component={ ExploreDrinksByIngredient }
          />
          <Route path="/explorar/comidas/area" component={ ExploreByOrigin } />
          <Route path="/explorar/comidas" component={ ExploreFoods } />
          <Route path="/explorar/bebidas" component={ ExploreDrinks } />
          <Route path="/receitas-feitas" component={ RecipesDone } />
          <Route path="/receitas-favoritas" component={ RecipesFavorite } />
          <Route path="/perfil" component={ Profile } />
          <Route path="/comidas" component={ Foods } />
          <Route path="/bebidas" component={ Drinks } />
          <Route path="/explorar" component={ Explore } />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
