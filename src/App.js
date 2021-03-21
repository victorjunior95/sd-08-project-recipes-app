import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Comidas from './Pages/Comidas';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact to="/" component={ Login } />
        <Route to="/comidas" component={ Comidas } />
        <Route to="/bebidas" />
        <Route to="/comidas/{id-da-receita}" />
        <Route to="/bebidas/{id-da-receita}" />
        <Route to="/comidas/{id-da-receita}/in-progress" />
        <Route to="/explorar" />
        <Route to="//explorar/comidas" />
        <Route to="/explorar/bebidas" />
        <Route to="/explorar/comidas/ingredientes" />
        <Route to="/explorar/bebidas/ingredientes" />
        <Route to="/explorar/comidas/area" />
        <Route to="/perfil" />
        <Route to="/receitas-feitas" />
        <Route to="/receitas-favoritas" />
      </Switch>
      {/* <Route to="**" /> */}
    </BrowserRouter>
  );
}

export default App;
