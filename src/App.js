import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import {
  Login,
  Comidas,
  Bebidas,
  NotFound,
  DetalhesReceita,
  Explorar,
  ExplorarIngredientes,
  ExplorarBebidaOuComida,
  ExplorarPorLocalDeOrigem,
  Perfil,
  ReceitasFeitas,
  ReceitasFavoritas,
  ReceitaEmProgresso,
} from './pages';

function App() {
  return (
    <div className="main">
      <Switch>
        <Route path="/comidas" component={ Comidas } />
        <Route path="/comidas/:id/in-progress" component={ ReceitaEmProgresso } />
        <Route path="/comidas/:id" component={ DetalhesReceita } />
        <Route path="/bebidas" component={ Bebidas } />
        <Route path="/bebidas/:id/in-progress" component={ ReceitaEmProgresso } />
        <Route path="/bebidas/:id" component={ DetalhesReceita } />
        <Route path="/explorar" component={ ExplorarBebidaOuComida } />
        <Route path="/explorar/comidas" component={ Explorar } />
        <Route path="/explorar/bebidas" component={ Explorar } />
        <Route path="/explorar/comidas/ingredientes" component={ ExplorarIngredientes } />
        <Route path="/explorar/bebidas/ingredientes" component={ ExplorarIngredientes } />
        <Route path="/explorar/comidas/area" component={ ExplorarPorLocalDeOrigem } />
        <Route path="/perfil" component={ Perfil } />
        <Route path="/receitas-feitas" component={ ReceitasFeitas } />
        <Route path="/receitas-favoritas" component={ ReceitasFavoritas } />
        <Route path="/explorar/bebidas/area" component={ ExplorarPorLocalDeOrigem } />
        <Route exact path="/" component={ Login } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;
