import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import getApi from '../services/apiRequests';

export default function Provider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [searchParams, setSearchParams] = useState({
    searchInput: '',
    selectedParameter: '',
    location: '',
  });

  const { searchInput, selectedParameter, location } = searchParams;

  useEffect(() => {
    let domain = '';
    if (location.includes('comida')) {
      domain = 'themealdb';
    } else if (location.includes('bebidas')) {
      domain = 'thecocktaildb';
    }

    switch (selectedParameter) {
    case 'ingredient':
      getApi(domain, `filter.php?i=${searchInput}`)
        .then((response) => setRecipes(response));
      break;
    case 'name':
      getApi(domain, `search.php?s=${searchInput}`)
        .then((response) => setRecipes(response));
      break;
    case 'first-letter':
      getApi(domain, `search.php?f=${searchInput}`)
        .then((response) => setRecipes(response));
      break;
    default:
      break;
    }
  }, [location, searchInput, searchParams, selectedParameter]);

  const context = { searchParams, setSearchParams, recipes };

  return <Context.Provider value={ context }>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
