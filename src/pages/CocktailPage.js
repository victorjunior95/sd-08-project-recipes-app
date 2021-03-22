import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  fetchCocktailByIngredients,
  fetchCocktailByName,
  fetchCocktailByFirstLetter,
} from '../services/CocktailAPI';

function CocktailPage() {
  const [recipes, setRecipes] = useState([]);

  const searchValue = useSelector((state) => state.search.inputValue);
  const searchType = useSelector((state) => state.search.inputType);

  const getSearchValues = useCallback(async () => {
    if (searchType === 'ingredient') {
      const { drinks } = await fetchCocktailByIngredients(searchValue);
      setRecipes(drinks);
    }
    if (searchType === 'name') {
      const { drinks } = await fetchCocktailByName(searchValue);
      setRecipes(drinks);
    }
    if (searchType === 'first-letter' && searchValue.length === 1) {
      const { drinks } = await fetchCocktailByFirstLetter(searchValue);
      setRecipes(drinks);
    }
  }, [searchType, searchValue]);

  useEffect(() => {
    if (searchValue && searchType) {
      getSearchValues();
    }
  }, [getSearchValues, searchType, searchValue]);

  if (recipes.length > 0) {
    return (
      <div>
        { recipes.map((elem) => (
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
  return (
    <span>Search for a Drink?</span>
  );
}

export default CocktailPage;
