import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { LIMIT_OF_CARDS } from '../../common/defs';
import IngredientCard from '../../components/IngredientCard';

export default function MealsIngredients() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function getIngredients() {
      const data = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      const response = await data.json();
      const firstTwelveIngredients = response.meals.slice(0, LIMIT_OF_CARDS);
      setIngredients(firstTwelveIngredients);
    }
    getIngredients();
  }, []);

  return (
    <div>
      <Header title="Explorar Ingredientes" />
      {ingredients.map((ingredient, index) => (
        <IngredientCard
          key={ index }
          index={ index }
          type="meal"
          ingredient={ ingredient.strIngredient }
        />
      ))}
      <Footer />
    </div>
  );
}
