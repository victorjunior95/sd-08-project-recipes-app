import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  fetchCocktailByIngredients,
  fetchCocktailByName,
  fetchCocktailByFirstLetter,
  fetchRandomDrinks,
} from '../services/CocktailAPI';

const useFetchDrinkRecipes = () => {
  const [recipesDrink, setRecipesDrink] = useState([]);
  const [randomDrinks, setRandomDrinks] = useState([]);
  const [drinkBySearch, setDrinkBySearch] = useState(false);

  const searchValue = useSelector((state) => state.search.inputValue);
  const searchType = useSelector((state) => state.search.inputType);

  const getSearchValues = useCallback(async () => {
    if (searchType === 'ingredient') {
      const { drinks } = await fetchCocktailByIngredients(searchValue);
      setRecipesDrink(drinks);
      setDrinkBySearch(true);
    }
    if (searchType === 'name') {
      const { drinks } = await fetchCocktailByName(searchValue);
      setRecipesDrink(drinks);
      setDrinkBySearch(true);
    }
    if (searchType === 'first-letter' && searchValue.length === 1) {
      const { drinks } = await fetchCocktailByFirstLetter(searchValue);
      setRecipesDrink(drinks);
      setDrinkBySearch(true);
    }
  }, [searchType, searchValue]);

  useEffect(() => {
    if (searchValue && searchType) {
      getSearchValues();
    }
    if (randomDrinks.length === 0) {
      const fetchRandom = async () => {
        const { drinks } = await fetchRandomDrinks();
        setRandomDrinks(drinks);
      };
      fetchRandom();
    }
  }, [getSearchValues, randomDrinks, searchType, searchValue]);

  return [recipesDrink, randomDrinks, drinkBySearch];
};

export default useFetchDrinkRecipes;
