import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, Bebida, BebidaDetalhes, BebidaProcesso, Comida, ComidaDetalhes,
  ComidaProcesso, Explorar, ExplorarComida, ExplorarBebida, ComidaIngredientes,
  BebidaIngredientes, ComidaArea, BebidaArea, Perfil, ReceitasFeitas,
  ReceitasFavoritas } from '../pages';
import ContextRoute from '../context-route/ContextRoute';
import UserProvider from '../context/userContext/UserProvider';
import FoodProvider from '../context/comidaContext/FoodProvider';
import DrinkProvider from '../context/bebidaContext/DrinkProvider';

function Routes() {
  return (
    <Switch>
      <Route path="/receitas-favoritas" component={ ReceitasFavoritas } />
      <Route path="/receitas-feitas" component={ ReceitasFeitas } />
      <Route path="/perfil" component={ Perfil } />
      <Route path="/explorar/comidas/area" component={ ComidaArea } />
      <Route path="/explorar/bebidas/area" component={ BebidaArea } />
      <Route path="/explorar/comidas/ingredientes" component={ ComidaIngredientes } />
      <Route path="/explorar/bebidas/ingredientes" component={ BebidaIngredientes } />
      <Route path="/explorar/comidas" component={ ExplorarComida } />
      <Route path="/explorar/bebidas" component={ ExplorarBebida } />
      <Route path="/explorar" component={ Explorar } />
      <Route path="/bebidas/:idDaReceita/in-progress" component={ BebidaProcesso } />
      <Route path="/comidas/:idDaReceita/in-progress" component={ ComidaProcesso } />
      <ContextRoute
        exact
        path="/bebidas/:idDaReceita"
        contextComponent={ DrinkProvider }
        component={ BebidaDetalhes }
      />
      <ContextRoute
        exact
        path="/comidas/:idDaReceita"
        contextComponent={ FoodProvider }
        component={ ComidaDetalhes }
      />
      <ContextRoute
        exact
        path="/bebidas"
        contextComponent={ DrinkProvider }
        component={ Bebida }
      />
      <ContextRoute
        exact
        path="/comidas"
        contextComponent={ FoodProvider }
        component={ Comida }
      />
      <ContextRoute
        exact
        path="/"
        contextComponent={ UserProvider }
        component={ Login }
      />
    </Switch>
  );
}

export default Routes;
