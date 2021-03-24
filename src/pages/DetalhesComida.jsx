import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import getResultFromAPI from '../api/getResultFromAPI';
import contextRecipes from '../context/Context';
import Details from '../components/Details';
import createIngredientsArray from '../services/createIngredientsArray';

function DetalhesComida() {
  const { id } = useParams();
  const context = useContext(contextRecipes);

  useEffect(() => {
    async function getMeal() {
      const food = await getResultFromAPI('/comidas', 'lookup', id);
      console.log(food);
      context.setCurrentFood(food);
      context.setCurrentFoodIngredients(createIngredientsArray(food));
    }
    getMeal();
  }, []);

  return (
    <div>
      <Details />
    </div>
  );
}

export default DetalhesComida;
