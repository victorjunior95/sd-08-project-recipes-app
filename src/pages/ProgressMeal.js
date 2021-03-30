import React from 'react';
import { useSelector } from 'react-redux';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function ProgressMeal() {
  const meat = useSelector((state) => state.recipes.recipes);

  const arrayMeat = meat[0];

  const findKey = (value) => Object.entries(arrayMeat).map((nome) => {
    if (nome[0].includes(value)) {
      return nome[1];
    }
    return undefined;
  }).filter((element) => element !== undefined);

  const createIngrediets = () => {
    const ingredient = findKey('strIngredient');
    const measure = findKey('strMeasure');
    return ingredient.map((nome, index) => {
      if (nome) {
        return (
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ index }
          >
            {`${nome} - ${measure[index]}`}
          </p>
        );
      }
      return undefined;
    });
  };

  const renderMeal = () => (
    arrayMeat !== undefined && (
      <div>
        <img data-testid="recipe-photo" src={ arrayMeat.strMealThumb } alt="img" />
        <h1 data-testid="recipe-title">{arrayMeat.strMeal}</h1>
        <button type="button" data-testid="share-btn">
          <img src={ shareIcon } alt="share icon" />
        </button>
        <button type="button" data-testid="favorite-btn">
          <img src={ whiteHeartIcon } alt="favorite" />
        </button>

        {/* {arrayRecipes === 'bebidas'
        && <p data-testid="recipe-category">{arrayMeat.strAlcoholic}</p> } */}

        <p data-testid="recipe-category">{arrayMeat.strCategory}</p>

        Ingredients
        {createIngrediets()}

        Instructions
        <p data-testid="instructions">{arrayMeat.strInstructions}</p>

        <button
          data-testid="finish-recipe-btn"
          type="button"
        >
          Finalizar Receita
        </button>
      </div>
    ));

  return (
    <div>
      Progress Meal
    </div>
  );
}

export default ProgressMeal;
