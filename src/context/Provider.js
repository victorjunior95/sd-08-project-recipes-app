import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LariContext from './Context';
import { headerSearch, fetchFood, fetchDrink } from '../services';

const Provider = ({ children }) => {
  const [food, setFood] = useState([]);
  const [drink, setDrink] = useState([]);
  const handleHeaderSearch = async (search, type) => {
    const results = await headerSearch(search, type);
    setFood(results ? results.meals : []);
  };
  const recipesFetch = async (isMeal) => {
    let results = {};
    if (isMeal) {
      results = await fetchFood();
      setFood(results.meals);
    } else {
      results = await fetchDrink();
      setDrink(results.drinks);
    }
    console.log(results);
    return results;
  };
  const context = { handleHeaderSearch, food, recipesFetch, drink };
  return (
    <div>
      <LariContext.Provider value={ context }>
        {children}
      </LariContext.Provider>
    </div>
  );
};
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
