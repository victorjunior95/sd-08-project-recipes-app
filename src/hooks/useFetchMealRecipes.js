import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  fetchMealByIngredients,
  fetchMealByName,
  fetchMealByFirstLetter,
  fetchRandomMeal,
} from '../services/MealAPI';

const useFetchMealRecipes = () => {
  const [recipesMeal, setRecipesMeal] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);
  const [mealBySearch, setMealBySearch] = useState(false);

  const searchValue = useSelector((state) => state.search.inputValue);
  const searchType = useSelector((state) => state.search.inputType);

  const getSearchValues = useCallback(async () => {
    if (searchType === 'ingredient') {
      const { meals } = await fetchMealByIngredients(searchValue);
      setRecipesMeal(meals);
      setMealBySearch(true);
    }
    if (searchType === 'name') {
      const { meals } = await fetchMealByName(searchValue);
      setRecipesMeal(meals);
      setMealBySearch(true);
    }
    if (searchType === 'first-letter' && searchValue.length === 1) {
      const { meals } = await fetchMealByFirstLetter(searchValue);
      setRecipesMeal(meals);
      setMealBySearch(true);
    }
  }, [searchType, searchValue]);

  useEffect(() => {
    if (searchValue && searchType) {
      getSearchValues();
    }
    if (randomMeal.length === 0) {
      const fetchRandom = async () => {
        const { meals } = await fetchRandomMeal();
        setRandomMeal(meals);
      };
      fetchRandom();
    }
  }, [getSearchValues, randomMeal, searchType, searchValue]);

  return [recipesMeal, randomMeal, mealBySearch];
};

export default useFetchMealRecipes;
