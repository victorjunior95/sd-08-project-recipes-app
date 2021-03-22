import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainRecipes from './pages/MainRecipes';
import ProfilePage from './pages/ProfilePage';
import Explore from './pages/Explore';
import ExploreFoodDrink from './pages/ExploreFoodDrink';
import DrinkIngredient from './pages/DrinkIngredient';
import FoodIngredient from './pages/FoodIngredient';
import ExploreOrigin from './pages/ExploreOrigin';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ LoginPage } />
        <Route exact path="/explorar" component={ Explore } />
        <Route path="/explorar/comidas/ingredientes" component={ DrinkIngredient } />
        <Route path="/explorar/bebidas/ingredientes" component={ FoodIngredient } />
        <Route path="/explorar/comidas/area" component={ ExploreOrigin } />
        <Route path="/comidas" component={ MainRecipes } />
        <Route path="/bebidas" component={ MainRecipes } />
        <Route path="/perfil" component={ ProfilePage } />
        <Route path="/explorar/" component={ ExploreFoodDrink } />
      </Switch>
    </main>
  );
}

export default App;

// ROTAS do README
// Tela de login: /;
// Tela principal de receitas de comidas: /comidas;
// Tela principal de receitas de bebidas: /bebidas;
// Tela de detalhes de uma receita de comida: /comidas/{id-da-receita};
// Tela de detalhes de uma receita de bebida: /bebidas/{id-da-receita};
// Tela de receita em processo de comida: /comidas/{id-da-receita}/in-progress;
// Tela de receita em processo de bebida: /bebidas/{id-da-receita}/in-progress;
// Tela de explorar: /explorar;
// Tela de explorar comidas: /explorar/comidas;
// Tela de explorar bebidas: /explorar/bebidas;
// Tela de explorar comidas por ingrediente: /explorar/comidas/ingredientes;
// Tela de explorar bebidas por ingrediente: /explorar/bebidas/ingredientes;
// Tela de explorar comidas por local de origem: /explorar/comidas/area;
// Tela de perfil: /perfil;
// Tela de receitas feitas: /receitas-feitas;
// Tela de receitas favoritas: /receitas-favoritas.
