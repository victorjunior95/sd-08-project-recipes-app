import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Comidas from './pages/Comidas';
import RecipesProvider from './context/RecipesProvider';
import Login from './pages/Login';

function App() {
  return (
    <RecipesProvider>
      <Router>
        <Switch>
          <Route exact path="/comidas" component={ Comidas } />
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
          <Route exact path="/perfil" />
          <Route exact path="/receitas-feitas" />
          <Route exact path="/receitas-favoritas" />
          <Route exact path="/" component={ Login } />
        </Switch>
      </Router>
    </RecipesProvider>

  );
}

export default App;
