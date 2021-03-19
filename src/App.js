import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Provider from './context/Provider';

// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          {/* <Route exact path='/' component={} /> */}
        </Switch>
        {/* <div className="meals">
          <span className="logo">TRYBE</span>
          <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
            Glass
          </object>
        </div> */}
      </Provider>
    </BrowserRouter>
  );
}

export default App;
