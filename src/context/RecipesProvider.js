import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import getFoodIngredients,
{ getFoodFirstLetter,
  getFoodName,
  getDrinkIngredients,
  getDrinkName,
  getDrinkFirstLetter } from '../services/API';

export default function RecipesProvider({ children }) {
  const [data, setData] = useState({ food: [], drink: [] });

  const getAPI = async (radio, textInput, pathname) => {
    switch (radio) {
    case ('ingredient'):
      return pathname === '/comidas'
        ? setData({
          ...data,
          food: await getFoodIngredients(textInput) })
        : setData({
          ...data,
          drink: await getDrinkIngredients(textInput) });
    case ('name'):
      return pathname === '/comidas'
        ? setData({
          ...data,
          food: await getFoodName(textInput) })
        : setData({
          ...data,
          drink: await getDrinkName(textInput) });
    case ('firstLetter'):
      if (textInput.length > 1) {
        return window.alert(
          'Sua busca deve conter somente 1 (um) caracter',
        );
      }
      return pathname === '/comidas'
        ? setData({
          ...data,
          food: await getFoodFirstLetter(textInput) })
        : setData({
          ...data,
          drink: await getDrinkFirstLetter(textInput) });

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
