import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import LikeButton from '../components/LikeButton';
import ShareButton from '../components/ShareButton';
import fetchDrinkActionId from '../redux/actions/fetchDrink';
import { findKey } from '../services/index';

function ProgressDrink() {
  const { singleRecipe } = useSelector((state) => state.recipes);

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const arrayId = pathname.split('/')[2];

  const arrayDrink = singleRecipe[0];

  useEffect(() => {
    const fetchData = ((id) => dispatch(fetchDrinkActionId(id)));
    fetchData(arrayId);
  }, []);

  const createIngrediets = () => {
    const ingredient = findKey(arrayDrink, 'strIngredient');
    const measure = findKey(arrayDrink, 'strMeasure');

    return ingredient.map((nome, index) => {
      if (nome) {
        return (
          <div key={ index } data-testid={ `${index}-ingredient-step` }>
            <input
              type="checkbox"
              id={ nome }
              name={ nome }

            />
            <label htmlFor={ nome }>{`${nome} - ${measure[index]}`}</label>
          </div>
        );
      }
      return undefined;
    });
  };

  const renderDrink = () => (
    arrayDrink !== undefined && (
      <div>
        <img data-testid="recipe-photo" src={ arrayDrink.strDrinkThumb } alt="recipe" />
        <h1 data-testid="recipe-title">{ arrayDrink.strDrink }</h1>
        <ShareButton
          recipeId={ arrayDrink.idDrink }
          recipeType="bebida"
        />
        <LikeButton />
        <p data-testid="recipe-category">{arrayDrink.strAlcoholic}</p>
        <p data-testid="recipe-category">{arrayDrink.strCategory}</p>
        Ingredients
        {createIngrediets()}

        Instructions
        <p data-testid="instructions">{arrayDrink.strInstructions}</p>

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
      {renderDrink()}
    </div>
  );
}

export default ProgressDrink;
