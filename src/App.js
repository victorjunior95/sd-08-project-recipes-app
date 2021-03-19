import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Route exact to="/" component={ Login } />
      <Route to="/comidas" />
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
      {/* <Route to="**" /> */}

      {/* <div className="meals">
        <span className="logo">TRYBE!</span>
        <h1>Começando</h1>
        <object
          className="rocksGlass"
          type="image/svg+xml"
          data={ rockGlass }
        >
          Glass
        </object>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
