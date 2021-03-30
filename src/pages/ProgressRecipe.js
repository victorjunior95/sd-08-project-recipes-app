import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as InProgressRecipesActions } from '../store/ducks/inProgressRecipes';
import * as mealApi from '../services/mealApi';
import * as cocktailApi from '../services/cocktailApi';

import styles from '../styles/pages/ProgressRecipe.module.css';

import PrimaryButton from '../components/PrimaryButton';
import RecipeHeader from '../components/RecipeHeader';
import RecipeIngredientsWithStep from '../components/RecipeIngredientsWithStep';
import RecipeInstructions from '../components/RecipeInstructions';

function getIngredients(recipe) {
  const ingredientKeys = Object.keys(recipe)
    .filter((item) => item.includes('Ingredient'));
  const ingredientList = ingredientKeys.map((key) => recipe[key])
    .filter((item) => item !== '' && item !== null);
  return ingredientList;
}

function getMeasures(recipe) {
  const measureKeys = Object.keys(recipe)
    .filter((item) => item.includes('Measure'));
  const measureList = measureKeys.map((measure) => recipe[measure])
    .filter((item) => item !== '' && item !== null);
  return measureList;
}

const ProgressRecipe = ({ isMeal }) => {
  // console.log(rest);
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function getRecipe() {
      let result = null;
      if (isMeal) {
        result = await mealApi.getById(id);
      } else {
        result = await cocktailApi.getById(id);
      }
      setRecipe(result.meals ? result.meals[0] : result.drinks[0]);
    }
    getRecipe();
  }, []);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <img
        src={ recipe.strMealThumb || recipe.strDrinkThumb }
        alt={ recipe.strMeal || recipe.strDrink }
        className={ styles.photo }
        data-testid="recipe-photo"
      />

      <div className={ styles.progressRecipe }>
        <RecipeHeader
          handleFavorite={ recipe.strMeal ? () => {} : () => {} }
          title={ recipe.strMeal || recipe.strDrink }
          category={ recipe.strCategory }
          id={ recipe.strMeal || recipe.strDrink }
        />

        <RecipeIngredientsWithStep
          ingredients={ getIngredients(recipe) }
          measures={ getMeasures(recipe) }
          id={ recipe.idMeal || recipe.idDrink }
        />

        <RecipeInstructions instructions={ recipe.strInstructions } />

        <PrimaryButton
          data-testid="finish-recipe-btn"
        >
          Finalizar Receita
        </PrimaryButton>
      </div>
    </div>
  );
};

ProgressRecipe.propTypes = {
  // meals: PropTypes.objectOf(PropTypes.object).isRequired,
  // cocktails: PropTypes.objectOf(PropTypes.object).isRequired,
  isMeal: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ inProgressRecipes }) => ({
  meals: inProgressRecipes.meals,
  cocktails: inProgressRecipes.cocktails,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(InProgressRecipesActions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ProgressRecipe);
