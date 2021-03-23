import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import Expĺorar from './pages/Explorar';
import ComidasIngredientes from './pages/ComidasIngredientes';
import BebidasIngredientes from './pages/BebidasIngredientes';
import ExplorarPorArea from './pages/ExplorarPorArea';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ExplorarBebidasIngredientes from './pages/ExplorarBebidasIngredientes';
import ExplorarComidasIngredientes from './pages/ExplorarComidasIngredientes';
import Perfil from './pages/Perfil';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import Generico from './components/Generico';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/comidas" component={ Comidas } />
            <Route exact path="/bebidas" component={ Bebidas } />
            <Route exact path="/explorar" component={ Expĺorar } />
            <Route exact path="/receitas-feitas" component={ ReceitasFeitas } />
            <Route exact path="/receitas-favoritas" component={ ReceitasFavoritas } />
            <Route exact path="/comidas/ingredientes" component={ ComidasIngredientes } />
            <Route exact path="/bebidas/ingredientes" component={ BebidasIngredientes } />
            <Route exact path="/explorar/comidas/area" component={ ExplorarPorArea } />
            <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
            {/* <Route component={ Expĺorar } /> */}
            <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
            <Route
              exact
              path="/explorar/bebidas/ingredientes"
              component={ ExplorarBebidasIngredientes }
            />
            <Route
              exact
              path="/explorar/comidas/ingredientes"
              component={ ExplorarComidasIngredientes }
            />
            <Route exact path="/perfil" component={ Perfil } />
            <Route path="/comidas/:foodId" component={ Generico } />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
