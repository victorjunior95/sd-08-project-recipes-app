import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import shareIcon from '../images/shareIcon.svg';
// import whiteHearticon from '../images/whiteHeartIcon.svg';
import ContainerRecipeDetails from '../components/ContainerRecipeDetails';
import { requestFoodById } from '../services/requestFoodsAPI';

function FoodDetails({
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

  // if (meal.length !== 0) {
  //   const { strMeal, strMealThumb, Side, strInstructions, strYoutube } = meal[0] || [];

  //   const vinte = 20;
  //   const arrayIngredients = [];
  //   for (let i = 1; i <= vinte; i += 1) {
  //     const ingredient = meal[0][`strIngredient${i}`];
  //     const measure = meal[0][`strMeasure${i}`];
  //     arrayIngredients.push(`${ingredient} - ${measure}`);
  //   }
  //   console.log(arrayIngredients);
  // }

  return (
    <section>
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        <ContainerRecipeDetails recipe={ meal[0] } />
      )}
    </section>
  );
}
FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
export default FoodDetails;
