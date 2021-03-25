import React from 'react';
import PropTypes from 'prop-types';
import HeaderRecipeDetails from './HeaderRecipeDetails';
import IngredientsRecipeDetails from './IngredientsRecipeDetails';
import InstructionsRecipeDetails from './InstructionsRecipeDetails';
import VideoRecipeDetails from './VideoRecipeDetails';
import RecommendedRecipeDetails from './RecommendedRecipeDetails';
import Button from './Button';

const ContainerRecipeDetails = ({ recipe, page }) => {
  const getIngredientsMeasure = (ingredientsSize) => {
    const arrayIngredients = [];
    for (let i = 1; i <= ingredientsSize; i += 1) {
      if (
        recipe[`strIngredient${i}`] !== ''
        && recipe[`strIngredient${i}`] !== null
      ) {
        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];
        arrayIngredients.push(`${ingredient} - ${measure}`);
      }
    }
    return arrayIngredients;
  };

  const foodInfo = () => {
    const {
      strMeal: name,
      strCategory: category,
      strMealThumb: image,
      strInstructions: instructions,
      strYoutube: video,
      strDrinkAlternate: aternateRecipe,
    } = recipe;
    const ingredientsSize = 20;
    const arrayIngredients = getIngredientsMeasure(ingredientsSize);
    return {
      name,
      category,
      image,
      instructions,
      video,
      aternateRecipe,
      arrayIngredients,
    };
  };

  const drinkInfo = () => {
    const {
      strDrink: name,
      strCategory: category,
      strDrinkThumb: image,
      strInstructions: instructions,
      strVideo: video,
      strDrinkAlternate: aternateRecipe,
    } = recipe;
    const ingredientsSize = 15;
    const arrayIngredients = getIngredientsMeasure(ingredientsSize);
    return {
      name,
      category,
      image,
      instructions,
      video,
      aternateRecipe,
      arrayIngredients,
    };
  };

  const recipeInfo = () => {
    if (page === 'Comidas') {
      return foodInfo();
    }
    if (page === 'Bebidas') {
      return drinkInfo();
    }
  };

  const {
    name,
    category,
    image,
    instructions,
    video,
    // aternateRecipe,
    arrayIngredients,
  } = recipeInfo();

  return (
    <main>
      <HeaderRecipeDetails title={ name } category={ category } imgPath={ image } />
      <IngredientsRecipeDetails ingredients={ arrayIngredients } />
      <InstructionsRecipeDetails instruction={ instructions } />
      {video ? <VideoRecipeDetails videoPath={ video } /> : ''}
      <RecommendedRecipeDetails />
      <Button name="Iniciar Receita" data-testid="start-recipe-btn" />
    </main>
  );
};

ContainerRecipeDetails.propTypes = {
  page: PropTypes.string.isRequired,
  recipe: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
    strYoutube: PropTypes.string.isRequired,
    strDrinkAlternate: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
    strVideo: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContainerRecipeDetails;
