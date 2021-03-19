import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import RecipesContextProvider from './context/RecipesContextProvider';

ReactDOM.render(
  <Router>
    <RecipesContextProvider>
      <App />
    </RecipesContextProvider>
  </Router>,
  document.getElementById('root'),
);
