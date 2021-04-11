import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Food from './pages/Food';
import Drinks from './pages/Drinks';
import Item from './components/Item';
import Perfil from './pages/Perfil';
import Explore from './pages/Explore';
import ExploreFood from './pages/ExploreFood';
import ExploreDrink from './pages/ExploreDrink';
import FoodArea from './pages/FoodArea';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />
        <Route path="/comidas/:id" render={ (props) => <Item { ...props } /> } />
        <Route path="/bebidas/:id" render={ (props) => <Item { ...props } /> } />
        <Route path="/comidas" render={ (props) => <Food { ...props } /> } />
        <Route path="/bebidas" render={ (props) => <Drinks { ...props } /> } />
        <Route path="/perfil" component={ Perfil } />
        <Route exact path="/explorar" render={ (props) => <Explore { ...props } /> } />
        <Route
          exact
          path="/explorar/comidas"
          render={ (props) => <ExploreFood { ...props } /> }
        />
        <Route
          exact
          path="/explorar/bebidas"
          render={ (props) => <ExploreDrink { ...props } /> }
        />
        <Route path="/explorar/comidas/ingredientes" />
        <Route path="/explorar/bebidas/ingredientes" />
        <Route
          exact
          path="/explorar/comidas/area"
          render={ (props) => <FoodArea { ...props } /> }
        />
        { /* <Route path="/comidas/{id-da-receita}/in-progress" />
        <Route path="/bebidas/{id-da-receita}/in-progress" />
        <Route path="/receitas-feitas" />
        <Route path="/receitas-favoritas" /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
