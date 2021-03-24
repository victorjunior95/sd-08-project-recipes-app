import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  Login, Comidas, Bebidas, Explorar, ExplorarComidas, ExplorarBebidas,
  ExplorarIngredientes, ExplorarOrigem, Perfil, ReceitasFeitas, ReceitasFavoritas,
  Details,
} from './Pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Comidas } />
        <Route exact path="/bebidas" component={ Bebidas } />
        <Route exact path="/explorar" component={ Explorar } />
        <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
        <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
        <Route path="/comidas/:id" component={ Details } />
        <Route path="/comidas/:id/in-progress" />
        <Route path="/explorar/comidas/ingredientes" component={ ExplorarIngredientes } />
        <Route path="/explorar/comidas/area" component={ ExplorarOrigem } />
        <Route path="/bebidas/:id" component={ Details } />
        <Route path="/explorar/bebidas/ingredientes" component={ ExplorarIngredientes } />
        <Route path="/perfil" component={ Perfil } />
        <Route path="/receitas-feitas" component={ ReceitasFeitas } />
        <Route path="/receitas-favoritas" component={ ReceitasFavoritas } />
      </Switch>
      {/* <Route path="**" /> */}
    </BrowserRouter>
  );
}

export default App;
