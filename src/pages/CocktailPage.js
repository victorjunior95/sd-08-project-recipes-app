import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  fetchCocktailByIngredients,
  fetchCocktailByName,
  fetchCocktailByFirstLetter,
  fetchRandomDrinks,
} from '../services/CocktailAPI';

function CocktailPage() {
  const [recipes, setRecipes] = useState([]);
  const [randomDrinks, setRandomDrinks] = useState([]);
  const [bySearch, setBySearch] = useState(false);

  const searchValue = useSelector((state) => state.search.inputValue);
  const searchType = useSelector((state) => state.search.inputType);

  const getSearchValues = useCallback(async () => {
    if (searchType === 'ingredient') {
      const { drinks } = await fetchCocktailByIngredients(searchValue);
      setRecipes(drinks);
      setBySearch(true);
    }
    if (searchType === 'name') {
      const { drinks } = await fetchCocktailByName(searchValue);
      setRecipes(drinks);
      setBySearch(true);
    }
    if (searchType === 'first-letter' && searchValue.length === 1) {
      const { drinks } = await fetchCocktailByFirstLetter(searchValue);
      setRecipes(drinks);
      setBySearch(true);
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

  function generateRecipesList(list) {
    return (
      <div>
        { list.map((elem) => (
          <div key={ elem.idDrink }>
            <h4>{ elem.strDrink }</h4>
            <span>{ elem.idDrink }</span>
            <img
              src={ elem.strDrinkThumb }
              alt={ elem.strDrink }
            />
          </div>
        ))}
      </div>
    );
  }

  if (!bySearch) {
    return (
      <div>
        <h2>Random suggestion</h2>
        { generateRecipesList(randomDrinks) }
      </div>
    );
  }

  return generateRecipesList(recipes);
}

export default CocktailPage;
