import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import Comidas from './pages/Meals/Meals';
import Bebidas from './pages/Drinks/Drinks';
import './App.css';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route path="/comidas" component={ Recipes } />
        <Route path="/bebidas" component={ Recipes } />
        <Route path="/perfil" component={ Profile } />
        <Route exact path="/" component={ LoginPage } />
        {/* <Route path="/bebidas/:id/in-progress" component={ Progress } /> */}
        {/* <Route path="/bebidas/:id" component={ Details } /> */}
        {/* <Route path="/receitas-feitas" component={ DoneRecipes } /> */}
        {/* <Route path="/receitas-favoritas" component={ FavoriteRecipes } /> */}
        {/* <Route */}
          {/* // path="/explorar/comidas/area"
          // render={ (props) => <Explore { ...props } search /> }
        // /> */}
        {/* <Route */}
          {/* // path="/explorar/bebidas/area"
          // render={ (props) => <Explore { ...props } search /> }
        // /> */}
        {/* <Route path="/explorar/comidas/ingredientes" component={ Explore } /> */}
        {/* <Route path="/explorar/bebidas/ingredientes" component={ Explore } /> */}
        {/* <Route path="/explorar/comidas" component={ Explore } /> */}
        {/* <Route path="/explorar/bebidas" component={ Explore } /> */}
        {/* <Route path="/explorar" component={ Explore } /> */}
        {/* <Route path="/comidas/:id/in-progress" component={ Progress } /> */}
        {/* <Route path="/comidas/:id" component={ Details } /> */}
        <Route path="/comidas" component={ Comidas } />
        <Route path="/bebidas" component={ Bebidas } />
      </Switch>
    </div>
  );
}

export default App;
