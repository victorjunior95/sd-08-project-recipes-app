import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Bebidas from './Pages/Bebidas';
import Comidas from './Pages/Comidas';
import Login from './Pages/Login';
import Perfil from './Pages/Perfil';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Comidas } />
        <Route exact path="/bebidas" component={ Bebidas } />
        <Route exact path="/perfil" component={ Perfil } />
      </Switch>
    </Provider>
  );
}

export default App;
