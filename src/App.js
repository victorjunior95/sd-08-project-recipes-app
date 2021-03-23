import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import Comidas from './pages/Meals/Meals';
import Bebidas from './pages/Drinks/Drinks';
import './App.css';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ LoginPage } />
        <Route path="/comidas" component={ Comidas } />
        <Route path="/bebidas" component={ Bebidas } />
      </Switch>
    </div>
  );
}

export default App;
