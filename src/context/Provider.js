import React, { useState, useCallback } from 'react';
import { PropTypes } from 'prop-types';
import Context from './Context';
import {
  fetchRecipes,
  fetchRecipeDetails,
  fetchRecommendations,
  fetchRandomRecipe,
} from '../services/RequisicaoApi';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputText, setInputText] = useState('');
  const [radioValue, setRadioValue] = useState('s');
  const [isFetching, setIsFetching] = useState(true);
  const [apiReturn, setApiReturn] = useState(null);
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [copyURL, setCopyURL] = useState(false);
  const [favorite, setFavorite] = useState(false);

  // async function requestApiData(endpoint) {
  //   const searchType = radioValue === 'i' ? 'filter' : 'search';
  //   setIsFetching(true);
  //   setApiReturn([await fetchRecipes(endpoint, searchType, radioValue, inputText)]);
  //   setIsFetching(false);
  // }

  const requestApiData = useCallback(async (endpoint) => {
    const searchType = radioValue === 'i' ? 'filter' : 'search';
    setIsFetching(true);
    setApiReturn([await fetchRecipes(endpoint, searchType, radioValue, inputText)]);
    setIsFetching(false);
  }, [inputText, radioValue]);

  async function requestRandomRecipe(endpoint) {
    setIsFetching(true);
    setApiReturn([await fetchRandomRecipe(endpoint)]);
    setIsFetching(false);
  }

  async function requestRecipeDetails(endpoint, recipeId, secondEndpoint) {
    setIsFetching(true);
    setRecipeDetails([await fetchRecipeDetails(endpoint, recipeId)]);
    setRecommendations([await fetchRecommendations(secondEndpoint)]);
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
    recipeDetails,
    setRecipeDetails,
    requestRecipeDetails,
    recommendations,
    setRecommendations,
    copyURL,
    setCopyURL,
    requestRandomRecipe,
    favorite,
    setFavorite,
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
