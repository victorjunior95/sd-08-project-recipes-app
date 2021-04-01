import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { requestFoodById } from '../services/requestFoodsAPI';
import ContainerInProgressRecipes from '../components/ContainerInProgressRecipes';

function FoodProcess({
  match: {
    params: { id },
  },
}) {
  const [meal, setMeal] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function requestApi() {
      const foodRecipe = await requestFoodById(id);
      setMeal(foodRecipe);
      setIsLoading(false);
    }
    requestApi();
  }, []);
  return (
    <section>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <ContainerInProgressRecipes recipe={ meal[0] } page="Comidas" id={ id } />
      )}
    </section>
  );
}

FoodProcess.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default FoodProcess;
