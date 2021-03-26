import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Context from './Context';
import fetchRecipes from '../services/RequisicaoApi';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputText, setInputText] = useState('');
  const [radioValue, setRadioValue] = useState('s');
  const [isFetching, setIsFetching] = useState(true);
  const [apiReturn, setApiReturn] = useState(null);
  const [apiReturnCategory, setApiReturnCategory] = useState([]);
  const [filteredRecipes, setfilteredRecipes] = useState(null);
  const [toggle, setToggle] = useState(false);

  async function requestApiData(endpoint) {
    const searchType = radioValue === 'i' ? 'filter' : 'search';
    setIsFetching(true);
    setApiReturn([await fetchRecipes(endpoint, searchType, radioValue, inputText)]);
    setIsFetching(false);
  }

  async function requestApiCategory() {
    setIsFetching(true);
    const meals = await fetchRecipes('themealdb', 'list', 'c', 'list');
    const drinks = await fetchRecipes('thecocktaildb', 'list', 'c', 'list');
    setApiReturnCategory([meals, drinks]);
    setIsFetching(false);
  }

  async function onClickCategoryFetch(endpoint, categoria) {
    setIsFetching(true);
    const recipesByCategory = await fetchRecipes(endpoint, 'filter', 'c', categoria);
    setfilteredRecipes(recipesByCategory);
    setIsFetching(false);
  }

  const context = {
    email,
    setEmail,
    password,
    setPassword,
    inputText,
    setInputText,
    radioValue,
    setRadioValue,
    isFetching,
    apiReturn,
    requestApiData,
    apiReturnCategory,
    requestApiCategory,
    onClickCategoryFetch,
    filteredRecipes,
    setToggle,
    toggle,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
