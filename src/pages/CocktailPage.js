import React, { useEffect, useState } from 'react';
import {
  fetchCocktailByIngredients,
  fetchCocktailByName,
  fetchCocktailByFirstLetter,
} from '../services/CocktailAPI';

function CocktailPage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { drinks } = await fetchCocktailByIngredients('vodka');
      console.log(drinks);
      setRecipes(drinks);
    }
    fetchData();
  }, [setRecipes]);

  return (
    <div>
      cocktail
    </div>
  );
}

export default CocktailPage;
