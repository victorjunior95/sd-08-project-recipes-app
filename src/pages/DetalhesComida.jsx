import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import getResultFromAPI from '../api/getResultFromAPI';
import contextRecipes from '../context/Context';
import Details from '../components/Details';

function DetalhesComida() {
  const { id } = useParams();
  const context = useContext(contextRecipes);

  useEffect(() => {
    async function getMeal() {
      const food = await getResultFromAPI('/comidas', 'lookup', id);
      context.setCurrentFood(food);
    }
    getMeal();
  }, [id, context]);

  return (
    <div>
      <Details />
    </div>
  );
}

export default DetalhesComida;
