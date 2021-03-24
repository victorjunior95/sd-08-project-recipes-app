import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import Comidas from './pages/Meals/Meals';
import Bebidas from './pages/Drinks/Drinks';
import Details from './pages/Details/Details';
import InProgress from './pages/InProgress';
import './App.css';

function App() {
  return (

    <Switch>
      <Route exact path="/" component={ LoginPage } />
      <Route path="/comidas/:id/in-progress" component={ InProgress } />
      <Route path="/bebidas/:id/in-progress" component={ InProgress } />
      <Route path="/comidas/:id" component={ Details } />
      <Route path="/bebidas/:id" component={ Details } />
      <div className="meals">
        <Route path="/comidas" component={ Comidas } />
        <Route path="/bebidas" component={ Bebidas } />
      </div>
    </Switch>
  );
}

export default App;
