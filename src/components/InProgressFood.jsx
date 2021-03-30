import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Button from './Button';
import ShareButton from './ShareButton';
import '../css/InProgressFood.css';
import updateLocalStorage from '../services/updateLocalStorage';
import readLocalStorage from '../services/readLocalStorage';
import getResultFromAPI from '../api/getResultFromAPI';
import createIngredientsArray from '../services/createIngredientsArray';

function InProgressFood() {
  const { pathname } = useLocation();
  const pathAndId = pathname.match(/(\/[comidas||bebidas]+)\/([0-9]+)+/);
  const [checked, setChecked] = useState([]);
  const [currentFood, setCurrentFood] = useState({});
  const [ingredients, setIngredients] = useState([]);

  function handleCheckClick(index) {
    setChecked(checked.includes(index)
      ? checked.filter((x) => x !== index) : [index, ...checked]);
  }

  useEffect(() => {
    async function getFood() {
      const food = await getResultFromAPI(pathAndId[1], 'lookup', pathAndId[2]);
      setCurrentFood(food[0]);
      setIngredients(createIngredientsArray(food[0]));
    }
    getFood();
    setChecked(readLocalStorage([pathAndId[1], pathAndId[2]]));
  }, []);

  useEffect(() => {
    updateLocalStorage([pathAndId[1], pathAndId[2]], checked);
  }, [checked]);

  function loadingScreen() {
    return (
      <div>LOADING...</div>
    );
  }

  function renderInProgress() {
    return (
      <>
        <img
          src={ currentFood.strMealThumb || currentFood.strDrinkThumb }
          data-testid="recipe-photo"
          alt="Thumbnail"
          className="inProgressImg"
        />
        <h1 data-testid="recipe-title">
          { currentFood.strMeal || currentFood.strDrink }
        </h1>
        <ShareButton path={ `${pathAndId[0]}` } />
        <p data-testid="favorite-btn">btnFavorito</p>
        <h6
          data-testid="recipe-category"
        >
          { currentFood.strAlcoholic
            ? currentFood.strAlcoholic : currentFood.strCategory }
        </h6>
        <h2>Ingredientes</h2>
        <div className="ingredientsSteps">
          { ingredients.map((curr, index) => (
            <div
              className="ingredientStep"
              key={ index }
              data-testid={ `${index}-ingredient-step` }
            >
              <input
                checked={ checked.includes(index) }
                type="checkbox"
                name={ curr }
                value={ curr }
                id={ curr }
                onChange={ () => handleCheckClick(index) }
              />
              <label htmlFor={ curr }>{ curr }</label>
            </div>
          ))}
        </div>
        <h2>Instruções</h2>
        <p data-testid="instructions">{ currentFood.strInstructions }</p>
        <Button
          datatestid="finish-recipe-btn"
          label="Finalizar Receita"
          onClick={ () => console.log('FINALIZOU') }
        />
      </>
    );
  }

  return (
    <div className="inProgressDiv">
      { currentFood.strCategory ? renderInProgress() : loadingScreen() }
    </div>
  );
}

export default InProgressFood;
