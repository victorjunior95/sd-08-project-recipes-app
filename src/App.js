import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Bebidas from './pages/Bebidas';
import Comidas from './pages/Comidas';
import NotFound from './pages/NotFound';
import Perfil from './pages/Perfil';
import Explorar from './pages/Explorar';
import ReceitasFeitas from './pages/ReceitasFeitas';

function App() {
  return (
    <div className="main">
      <Switch>
        <Route path="/comidas" component={ Comidas } />
        <Route path="/comidas/:id/in-progress" component={ Bebidas } />
        <Route path="/comidas/:id" component={ Comidas } />
        <Route path="/bebidas" component={ Bebidas } />
        <Route path="/bebidas/:id/in-progress" component={ Bebidas } />
        <Route path="/bebidas/:id" component={ Bebidas } />
        <Route path="/explorar" component={ Explorar } />
        <Route path="/explorar/comidas" component={ Explorar } />
        <Route path="/explorar/bebidas" component={ Explorar } />
        <Route path="/explorar/comidas/ingredientes" component={ Explorar } />
        <Route path="/explorar/bebidas/ingredientes" component={ Explorar } />
        <Route path="/explorar/comidas/area" component={ Explorar } />
        <Route path="/perfil" component={ Perfil } />
        <Route path="/receitas-feitas" component={ ReceitasFeitas } />
        <Route path="/receitas-favoritas" component={ ReceitasFeitas } />
        <Route path="/explorar/bebidas/area" component={ Explorar } />
        <Route exact path="/" component={ Login } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;
