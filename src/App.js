import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import Comidas from './pages/Meals/Meals';
import Bebidas from './pages/Drinks/Drinks';
import Details from './pages/Details/Details';
import InProgress from './pages/InProgress';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route path="/comidas/:id/in-progress" component={ InProgress } />
        <Route path="/bebidas/:id/in-progress" component={ InProgress } />
        <Route path="/comidas/:id" component={ Details } />
        <Route path="/bebidas/:id" component={ Details } />
        <Route path="/comidas" component={ Comidas } />
        <Route path="/bebidas" component={ Bebidas } />
        <Route path="/explorar/comidas/area" component={ Explore } />
        <Route
          path="/explorar/bebidas/ingredientes"
          component={ Explore }
        />
        <Route
          path="/explorar/comidas/ingredientes"
          component={ Explore }
        />
        <Route exact path="/explorar/bebidas" component={ Explore } />
        <Route exact path="/explorar/comidas" component={ Explore } />
        <Route exact path="/explorar" component={ Explore } />
        <Route path="/perfil" component={ Profile } />
        <Route exact path="/" component={ LoginPage } /> 
      </Switch>
    </div>
  );
}

export default App;
