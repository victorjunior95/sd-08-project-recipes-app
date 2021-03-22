import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Comidas from './pages/Comidas';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />
        <Route path="/comidas" component={ Comidas } />
        {/* <Route path="/bebidas" />
        <Route path="/comidas/{id-da-receita}" />
        <Route path="/bebidas/{id-da-receita}" />
        <Route path="/comidas/{id-da-receita}/in-progress" />
        <Route path="/bebidas/{id-da-receita}/in-progress" />
        <Route path="/explorar" />
        <Route path="/explorar/comidas" />
        <Route path="/explorar/bebidas" />
        <Route path="/explorar/comidas/ingredientes" />
        <Route path="/explorar/bebidas/ingredientes" />
        <Route path="/explorar/comidas/area" />
        <Route path="/perfil" />
        <Route path="/receitas-feitas" />
        <Route path="/receitas-favoritas" /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
