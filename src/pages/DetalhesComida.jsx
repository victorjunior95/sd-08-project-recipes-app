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
      context.setCurrentFood({ ...food[0] });
      context.setCurrentFoodIngredients(createIngredientsArray(food[0]));
    }
    getMeal();
  }, []);

  return (
    <Details />
  );
}

export default DetalhesComida;
