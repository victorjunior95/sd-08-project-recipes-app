import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ExplorarBebidas from './components/ExplorarBebidas';
import ExplorarComidas from './components/ExplorarComidas';
import Provider from './context/Provider';
import Bebidas from './Pages/Bebidas';
import Comidas from './Pages/Comidas';
import Detalhes from './Pages/Detalhes';
import Explorar from './Pages/Explorar';
import Login from './Pages/Login';
import Perfil from './Pages/Perfil';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Comidas } />
        <Route exact path="/comidas/:id" component={ Detalhes } />
        <Route exact path="/bebidas/:id" component={ Detalhes } />
        <Route exact path="/bebidas" component={ Bebidas } />
        <Route exact path="/perfil" component={ Perfil } />
        <Route exact path="/explorar" component={ Explorar } />
        <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
        <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
      </Switch>
    </Provider>
  );
}

export default App;
