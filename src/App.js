import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './Pages/Login';

function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/" component={ Login } />
      </Switch>
    </Provider>
  );
}

export default App;
