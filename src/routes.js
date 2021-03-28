import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import Login from './pages/Login';
import Comida from './pages/Comida';
import Bebida from './pages/Bebida';
import ProcessoComida from './pages/ProcessoComida';
import ProcessoBebida from './pages/ProcessoBebida';
import Explorar from './pages/Explorar';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ExplorarIngredientesComidas from './pages/ExplorarIngredientesComidas';
import ExplorarIngredientesBebidas from './pages/ExplorarIngredientesBebidas';
import ExplorarRegiaoComidas from './pages/ExplorarRegiaoComidas';
import Perfil from './pages/Perfil';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritadas from './pages/ReceitasFavoritadas';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Comidas } />
      <Route exact path="/bebidas" component={ Bebidas } />
      <Route exact path="/comidas/:id" component={ Comida } />
      <Route exact path="/bebidas/:id" component={ Bebida } />
      <Route exact path="/comidas/:id/in-progress" component={ ProcessoComida } />
      <Route exact path="/bebidas/:id/in-progress" component={ ProcessoBebida } />
      <Route exact path="/explorar" component={ Explorar } />
      <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
      <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
      <Route
        exact
        path="/explorar/comidas/ingredientes"
        component={ ExplorarIngredientesComidas }
      />
      <Route
        exact
        path="/explorar/bebidas/ingredientes"
        component={ ExplorarIngredientesBebidas }
      />
      <Route exact path="/explorar/comidas/area" component={ ExplorarRegiaoComidas } />
      <Route exact path="/perfil" component={ Perfil } />
      <Route exact path="/receitas-feitas" component={ ReceitasFeitas } />
      <Route exact path="/receitas-favoritas" component={ ReceitasFavoritadas } />
    </Switch>
  );
}

export default Routes;
