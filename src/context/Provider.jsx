import React from 'react';
import contextRecipes from './Context';
import App from '../App';
// import PropTypes from 'prop-types';

const { Provider } = contextRecipes;

function RecipesProvider() {
  return (
    <Provider value={ state }>
      <App />
    </Provider>
  );
}
// .propTypes = {};

export default RecipesProvider;
