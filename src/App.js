import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Food from './pages/Food';
import Drinks from './pages/Drinks';
import Item from './components/Item';
import Perfil from './pages/Perfil';
import Explore from './pages/Explore';
import Progress from './components/Progress';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={ (props) => <Login { ...props } /> } />
        <Route exact path="/comidas/:id" render={ (props) => <Item { ...props } /> } />
        <Route exact path="/bebidas/:id" render={ (props) => <Item { ...props } /> } />
        <Route exact path="/comidas" render={ (props) => <Food { ...props } /> } />
        <Route exact path="/bebidas" render={ (props) => <Drinks { ...props } /> } />
        <Route exact path="/perfil" component={ Perfil } />
        <Route exact path="/explorar" component={ Explore } />
        <Route
          path="/comidas/:id/in-progress"
          render={ (props) => <Progress { ...props } /> }
        />
        <Route
          path="/bebidas/:id/in-progress"
          render={ (props) => <Progress { ...props } /> }
        />
        { /*
        <Route path="/explorar/comidas" />
        <Route path="/explorar/bebidas" />
        <Route path="/explorar/comidas/ingredientes" />
        <Route path="/explorar/bebidas/ingredientes" />
        <Route path="/explorar/comidas/area" />
        <Route path="/receitas-feitas" />
        <Route path="/receitas-favoritas" /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
