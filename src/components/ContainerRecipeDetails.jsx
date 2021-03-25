import React from 'react';
import PropTypes from 'prop-types';
import HeaderRecipeDetails from './HeaderRecipeDetails';
import IngredientsRecipeDetails from './IngredientsRecipeDetails';
import InstructionsRecipeDetails from './InstructionsRecipeDetails';
import VideoRecipeDetails from './VideoRecipeDetails';

const ContainerRecipeDetails = ({ recipe }) => {
  const {
    strMeal,
    strCategory,
    strMealThumb,
    strInstructions,
    strYoutube,
    strDrinkAlternate
  } = recipe;

  const ingredientsSize = 20;
  const arrayIngredients = [];
  for (let i = 1; i <= ingredientsSize; i += 1) {
    if (recipe[`strIngredient${i}`] !== '') {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      arrayIngredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <main>
      <HeaderRecipeDetails
        title={ strMeal }
        category={ strCategory }
        imgPath={ strMealThumb }
      />
      <IngredientsRecipeDetails ingredients={ arrayIngredients } />
      <InstructionsRecipeDetails instruction={ strInstructions } />
      {strYoutube ? <VideoRecipeDetails videoPath={ strYoutube } /> : ''}
    </main>
  );
};

ContainerRecipeDetails.propTypes = {
  recipe: PropTypes.shape({}).isRequired,
};

export default ContainerRecipeDetails;
