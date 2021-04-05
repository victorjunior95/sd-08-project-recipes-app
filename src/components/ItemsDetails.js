import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// actions
import Button from 'react-bootstrap/Button';
import { drinkInProgress as drinkInProgressAction,
  mealInProgress as mealInProgressAction } from '../action';

// svg && icon
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

// Components
import Recommendation from './Recommendation';

class ItemsDetails extends Component {
  juntar(chave, itemValue) {
    return Object.entries(itemValue).map((nome) => {
      if (nome[0].includes(chave)) {
        return nome[1];
      }
      return undefined;
    }).filter((element) => element !== undefined);
  }

  checkRecipeProgress(type, id) {
    const { recipesProgress } = this.props;
    if (type === 'Meal') {
      const inProgress = recipesProgress.meals.includes(id);
      if (inProgress) return 'Continuar Receita';
      return 'Iniciar Receita';
    }
    if (type === 'Drink') {
      const inProgress = recipesProgress.drinks.includes(id);
      if (inProgress) return 'Continuar Receita';
      return 'Iniciar Receita';
    }
  }

  ingredientesComQuantidades(itemValue) {
    const ingredient = this.juntar('strIngredient', itemValue);
    const measure = this.juntar('strMeasure', itemValue);
    return ingredient.map((nome, index) => {
      if (nome) {
        return (
          <p key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
            {`${nome} - ${measure[index]}`}
          </p>
        );
      }
      return undefined;
    });
  }

  startRecipe(type, id) {
    const { startDrinkRecipe, recipesProgress, startMealRecipe } = this.props;
    if (type === 'Drink') {
      const checkProgress = recipesProgress.drinks.includes(id);
      if (!checkProgress) startDrinkRecipe(id);
    }
    const checkProgress = recipesProgress.meals.includes(id);
    if (!checkProgress) startMealRecipe(id);
  }

  render() {
    const { type, result } = this.props;
    return (
      <>
        <img
          data-testid="recipe-photo"
          src={ result[`str${type}Thumb`] }
          alt="img"
          width="70px"
        />

        {result.strAlcoholic ? (
          <p data-testid="recipe-category">
            {result.strAlcoholic}
          </p>
        ) : (
          <p data-testid="recipe-category">
            {result.strCategory}
          </p>
        )}

        <button type="button" data-testid="share-btn">
          <img src={ shareIcon } alt="share icon" />
        </button>
        <button type="button" data-testid="favorite-btn">
          <img src={ whiteHeartIcon } alt="favorite" />
        </button>
        <h1 data-testid="recipe-title">{ result[`str${type}`] }</h1>
        <p>
          { result.strCategory }
        </p>
        {result.strYoutube
        && <iframe
          title="video"
          data-testid="video"
          src={ result.strYoutube.replace('watch?v=', 'embed/') }
        />}
        <div>
          {this.ingredientesComQuantidades(result)}
        </div>
        <p data-testid="instructions">
          Instruções:
          {result.strInstructions}
        </p>
        <Recommendation />
        <Button
          className="start-recipe-btn"
          data-testid="start-recipe-btn"
          variant="success"
          onClick={ () => this.startRecipe(type, result[`id${type}`]) }
        >
          {this.checkRecipeProgress(type, result[`id${type}`])}
        </Button>
      </>
    );
  }
}

const mapStateToProps = ({ recipesInProgress, recipesDone }) => ({
  recipesProgress: recipesInProgress.recipesProgress,
  recipesDone: recipesDone.doneRecipes,
});

const mapDispatchToProps = (dispatch) => ({
  startDrinkRecipe: (drink) => dispatch(drinkInProgressAction(drink)),
  startMealRecipe: (drink) => dispatch(mealInProgressAction(drink)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsDetails);

ItemsDetails.propTypes = {
  type: PropTypes.string.isRequired,
  result: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
  recipesProgress: PropTypes.shape({
    meals: PropTypes.arrayOf(PropTypes.string),
    drinks: PropTypes.arrayOf(PropTypes.string),
  }),
  recipesDone: PropTypes.shape({
    meals: PropTypes.arrayOf(PropTypes.string),
    drinks: PropTypes.arrayOf(PropTypes.string),
  }),
  startDrinkRecipe: PropTypes.func.isRequired,
  startMealRecipe: PropTypes.func.isRequired,
};

ItemsDetails.defaultProps = {
  recipesProgress: {
    meals: [],
    drinks: [],
  },
  recipesDone: {
    meals: [],
    drinks: [],
  },
};
