import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={ LoginPage } />
      </Switch>
    </div>
  );
}

export default App;
