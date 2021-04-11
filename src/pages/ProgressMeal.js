import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import fetchMealActionId from '../redux/actions/fetchMealId';
import '../CSS/Completed.css';
import ShareButton from '../components/ShareButton';
import LikeButton from '../components/LikeButton';
import { findKey } from '../services/index';

function ProgressMeal() {
  const { singleRecipe } = useSelector((state) => state.recipes);
  const [meatStorage, setMeatStorage] = useState([]);
  const history = useHistory();
  const arrayMeat = singleRecipe[0];
  const dispatch = useDispatch();

  const { pathname } = history.location;
  const arrayId = pathname.split('/')[2];

  useEffect(() => {
    const fetchData = (id) => dispatch(fetchMealActionId(id));
    fetchData(arrayId);
    const storage = localStorage.getItem('inProgressRecipes')
      && JSON.parse(localStorage.getItem('inProgressRecipes')).meals;
    setMeatStorage((storage && storage[arrayId]) ? storage[arrayId] : []);
  }, []);

  function saveLocalStorage(id, name) {
    const getStorage = localStorage.getItem('inProgressRecipes')
      && JSON.parse(localStorage.getItem('inProgressRecipes'));

    const localState = meatStorage.includes(name)
      ? meatStorage.filter((e) => e !== name)
      : meatStorage.concat(name);
    setMeatStorage(localState);

    const newStorage = getStorage
      ? Object.assign(getStorage, { meals: { [id]: localState } })
      : { meals: { [id]: localState } };

    localStorage.setItem('inProgressRecipes', JSON.stringify(newStorage));
  }

  const handleChecked = ({ target }) => {
    const { parentNode } = target;
    const { checked } = target;
    if (checked) {
      parentNode.className = 'completed';
    } else {
      parentNode.className = '';
    }
  };

  const createIngrediets = () => {
    const ingredient = findKey(arrayMeat, 'strIngredient');
    const measure = findKey(arrayMeat, 'strMeasure');
    return ingredient.map((nome, index) => {
      if (nome) {
        return (
          <div key={ index } data-testid={ `${index}-ingredient-step` }>
            <label
              htmlFor={ nome }
              className={ meatStorage && meatStorage.includes(nome) ? 'completed' : '' }
            >
              <input
                type="checkbox"
                id={ nome }
                name={ nome }
                value={ nome }
                onChange={ (event) => {
                  handleChecked(event);
                  saveLocalStorage(arrayId, nome);
                } }
                checked={ meatStorage && meatStorage.includes(nome) }
              />
              {`${nome} - ${measure[index]}`}
            </label>
          </div>
        );
      }
      return undefined;
    });
  };

  const verifyDisable = () => {
    const ingredientLength = findKey(arrayMeat, 'strIngredient').length;
    if (meatStorage && meatStorage.length === ingredientLength) {
      return false;
    }
    return true;
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
          disabled={ verifyDisable() }
          onClick={ () => history.push('/receitas-feitas') }
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
