import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login';
// import Comida from './pages/comida';
// import Bebida from './pages/bebida';
// import ComidaDetalhes from './pages/comida/detalhes';
// import BebidaDetalhes from './pages/bebida/detalhes';
// import BebidaProcesso from './pages/bebida/processo';
// import ComidaProcesso from './pages/comida/processo';
// import Explorar from './pages/explorar';
// import ExplorarComida from './pages/explorar/comida';
// import ExplorarBebida from './pages/explorar/bebida';
// import ComidaIngredientes from './pages/explorar/comida/ingredientes';
// import BebidaIngredientes from './pages/explorar/bebida/ingredientes';
// import ComidaArea from './pages/explorar/comida/area';
import Perfil from './pages/perfil';
import ReceitasFeitas from './pages/receitas-feitas';
import ReceitasFavoritas from './pages/receitas-favoritas';
import ContextRoute from './context-route/ContextRoute';
import UserProvider from './context/userContext/UserProvider';

function App() {
  return (
    <Switch>
      <Route path="/perfil" component={ Perfil } />
      <Route path="/receitas-favoritas" component={ ReceitasFavoritas } />
      <Route path="/receitas-feitas" component={ ReceitasFeitas } />
      {/*
      <Route path="/explorar/comida/area" component={ ComidaArea } />
      <Route path="/explorar/comida/ingredientes" component={ ComidaIngredientes } />
      <Route path="/explorar/bebida/ingredientes" component={ BebidaIngredientes } />
      <Route path="/explorar/comida" component={ ExplorarComida } />
      <Route path="/explorar/bebida" component={ ExplorarBebida } />
      <Route path="/explorar" component={ Explorar } />
      <Route path="/bebidas/:idDaReceita/in-progress" component={ BebidaProcesso } />
      <Route path="/comidas/:idDaReceita/in-progress" component={ ComidaProcesso } />
      <Route path="/bebidas/:idDaReceita" component={ BebidaDetalhes } />
      <Route path="/comidas/:idDaReceita" component={ ComidaDetalhes } />
      <Route path="/bebidas" component={ Bebida } />
      <Route path="/comidas" component={ Comida } /> */}
      <ContextRoute
        exact
        path="/"
        contextComponent={ UserProvider }
        component={ Login }
      />
    </Switch>
  );
}

export default App;
