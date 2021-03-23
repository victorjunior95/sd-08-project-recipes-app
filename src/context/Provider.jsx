import React, { useState, useEffect } from 'react';
import contextRecipes from './Context';
import App from '../App';
// import PropTypes from 'prop-types';

function RecipesProvider() {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const drinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const [mealsToken, setMealsToken] = useState(1);
  const [cocktailsToken, setCocktailsToken] = useState(1);
  const [user, setUser] = useState({
    email: '',
  });
  const [filter, setFilter] = useState([]);
  const [buttonFilter, setButtonFilter] = useState([]);
  const [drinkApiButton, setDrinkApiButton] = useState([]);

  useEffect(() => {
    function saveLocalStorage() {
      localStorage.setItem('mealsToken', mealsToken);
      localStorage.setItem('cocktailsToken', cocktailsToken);
      localStorage.setItem('user', JSON.stringify(user));
    }
    saveLocalStorage();
  }, [user, mealsToken, cocktailsToken]);

  useEffect(() => {
    async function fetchData() {
      const FIVE_CATEGORYS = 5;
      const { drinks } = await fetch(drinkUrl).then((response) => response.json());
      // console.log(meals.slice(0, FIVE_CATEGORYS));
      setDrinkApiButton(drinks.slice(0, FIVE_CATEGORYS));
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const FIVE_CATEGORYS = 5;
      const { meals } = await fetch(url).then((response) => response.json());
      // console.log(meals.slice(0, FIVE_CATEGORYS));
      setButtonFilter(meals.slice(0, FIVE_CATEGORYS));
    }
    fetchData();
  }, []);

  const state = {
    setButtonFilter,
    setUser,
    setMealsToken,
    setCocktailsToken,
    setFilter,
    buttonFilter,
    drinkApiButton,
    filter,
  };
  return (
    <contextRecipes.Provider value={ state }>
      <App />
    </contextRecipes.Provider>
  );
}
// .propTypes = {};

export default RecipesProvider;
