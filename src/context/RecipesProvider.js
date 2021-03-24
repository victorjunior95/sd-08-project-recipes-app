import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import getFoodIngredients, { getFoodFirstLetter, getFoodName } from '../services/API';

export default function RecipesProvider({ children }) {
  const [data, setData] = useState({ food: [] });

  const getAPI = async (radio, textInput) => {
    switch (radio) {
    case ('ingredient'):
      return setData({
        ...data,
        food: await getFoodIngredients(textInput) });
    case ('name'):
      return setData({
        ...data,
        food: await getFoodName(textInput) });
    case ('firstLetter'):
      if (textInput.length > 1) {
        return window.alert(
          'Sua busca deve conter somente 1 (um) caracter',
        );
      }
      return setData({
        ...data,
        food: await getFoodFirstLetter(textInput) });

    default:
      break;
    }
  };

  const context = { getAPI };

  return (
    <RecipesContext.Provider value={ context }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
