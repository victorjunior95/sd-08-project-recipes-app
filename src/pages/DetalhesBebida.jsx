import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getResultFromAPI from '../api/getResultFromAPI';
import Details from '../components/Details';
import contextRecipes from '../context/Context';
import createIngredientsArray from '../services/createIngredientsArray';

function DetalhesBebida() {
  const { id } = useParams();
  const context = useContext(contextRecipes);

  useEffect(() => {
    async function getDrink() {
      const food = await getResultFromAPI('/bebidas', 'lookup', id);
      context.setCurrentFood(food);
      context.setCurrentFoodIngredients(createIngredientsArray(food));
    }
    getDrink();
  }, []);

  return (
    <div>
      <Details />
    </div>
  );
}

export default DetalhesBebida;
