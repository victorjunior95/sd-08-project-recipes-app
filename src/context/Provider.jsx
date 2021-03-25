import React, { useState, useEffect } from 'react';
import contextRecipes from './Context';
import App from '../App';
import fetchCategories from '../api/fetchCategories';
// import PropTypes from 'prop-types';

function RecipesProvider() {
  const [mealsToken, setMealsToken] = useState(1);
  const [cocktailsToken, setCocktailsToken] = useState(1);
  const [user, setUser] = useState({
    email: '',
  });
  const [filter, setFilter] = useState([]);
  const [mealsCategories, setMealsCategories] = useState([]);
  const [drinksCategories, setDrinksCategories] = useState([]);
  const [currentFood, setCurrentFood] = useState([]);
  const [currentFoodIngredients, setCurrentFoodIngredients] = useState([]);
  const [mainIngredient, setMain] = useState('');

  // useEffect(() => {
  //   function saveLocalStorage() {
  //     localStorage.setItem('mealsToken', mealsToken);
  //     localStorage.setItem('cocktailsToken', cocktailsToken);
  //     localStorage.setItem('user', JSON.stringify(user));
  //   }
  //   saveLocalStorage();
  // }, [user, mealsToken, cocktailsToken]);

  useEffect(() => {
    async function fetchData() {
      const drinksCategoriesAPI = await fetchCategories('drinks');
      const mealCategoriesAPI = await fetchCategories('meals');
      setDrinksCategories(drinksCategoriesAPI);
      setMealsCategories(mealCategoriesAPI);
    }
    fetchData();
  }, []);

  const state = {
    setCurrentFoodIngredients,
    currentFoodIngredients,
    setCurrentFood,
    currentFood,
    setMealsCategories,
    setUser,
    setMealsToken,
    setCocktailsToken,
    setFilter,
    mealsCategories,
    drinksCategories,
    filter,
    mainIngredient,
    setMain,
  };
  return (
    <contextRecipes.Provider value={ state }>
      <App />
    </contextRecipes.Provider>
  );
}

export default RecipesProvider;
