import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import Comidas from './pages/Meals/Meals';
import Bebidas from './pages/Drinks/Drinks';
import Explore from './pages/Explore';
import ExploreDrinkIngredients from './pages/ExploreDrinkIngredients';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreMealArea from './pages/ExploreMealArea';
import ExploreMealIngredients from './pages/ExploreMealIngredients';
import ExploreMeals from './pages/ExploreMeals';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ LoginPage } />
        <Route exact path="/comidas" component={ Comidas } />
        <Route exact path="/bebidas" component={ Bebidas } />
        <Route exact path="/explorar" component={ Explore } />
        <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
        <Route exact path="/explorar/comidas" component={ ExploreMeals } />
        <Route path="/explorar/comidas/area" component={ ExploreMealArea } />
        <Route path="/perfil" component={ Profile } />
        <Route
          path="/explorar/bebidas/ingredientes"
          component={ ExploreDrinkIngredients }
        />
        <Route
          path="/explorar/comidas/ingredientes"
          component={ ExploreMealIngredients }
        />
      </Switch>
    </div>
  );
}

export default App;
