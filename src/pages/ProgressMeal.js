import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import fetchMealActionId from '../redux/actions/fetchMealId';
import '../CSS/Completed.css';
import ShareButton from '../components/ShareButton';
import LikeButton from '../components/LikeButton';
import { findKey } from '../services/index';

function ProgressMeal() {
  const { singleRecipe } = useSelector((state) => state.recipes);

  const arrayMeat = singleRecipe[0];
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const arrayId = pathname.split('/')[2];

  useEffect(() => {
    const fetchData = (id) => dispatch(fetchMealActionId(id));

    fetchData(arrayId);
  }, []);

  const handleChecked = (event) => {
    const { parentNode } = event.target;
    const { checked } = event.target;
    if (checked) {
      parentNode.childNodes[1].className = 'completed';
    } else {
      parentNode.childNodes[1].className = '';
    }
  };

  const createIngrediets = () => {
    const ingredient = findKey(arrayMeat, 'strIngredient');
    const measure = findKey(arrayMeat, 'strMeasure');

    return ingredient.map((nome, index) => {
      if (nome) {
        return (
          <div key={ index } data-testid={ `${index}-ingredient-step` }>
            <input
              type="checkbox"
              id={ nome }
              name={ nome }
              value={ nome }
              onClick={ handleChecked }
            />
            <label
              htmlFor={ nome }
            >
              {`${nome} - ${measure[index]}`}
            </label>
          </div>
        );
      }
      return undefined;
    });
  };

  const renderMeal = () => (
    arrayMeat !== undefined && (
      <div>
        <img data-testid="recipe-photo" src={ arrayMeat.strMealThumb } alt="recipe" />
        <h1 data-testid="recipe-title">{ arrayMeat.strMeal }</h1>
        <ShareButton recipeId={ arrayMeat.idMeal } recipeType="comida" />
        <LikeButton />

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
      {renderMeal()}
    </div>
  );
}

export default ProgressMeal;
