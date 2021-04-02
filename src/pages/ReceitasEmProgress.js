import React, { useEffect, useState } from 'react';

import { useLocation, useHistory } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

import { fetchProductDetailsById } from '../services';
// import { handleIsFavorite } from './Detalhes';

const Detalhes = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isMeal, setIsMeal] = useState(true);
  const [foodDetails, setFoodDetails] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [hidden, setHidden] = useState(false);
  // const [check, setCheck] = useState(false);
  const [usedIngri, setUseIngri] = useState([]);
  const [inProgress, setInProgress] = useState({});
  const location = useLocation();
  // const history = useHistory();
  // console.log(history, 'oiss');

  const handleInProgress = (idCurrentRecipe) => {
    if (localStorage.getItem('inProgressRecipes') === null) {
      const recipesInProgress = {
        cocktails: {},
        meals: {},
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(recipesInProgress));
    } else {
      const storageProgessRecipes = (
        JSON.parse(localStorage.getItem('inProgressRecipes')));
      setInProgress(storageProgessRecipes);
      console.log(storageProgessRecipes, 'iii');
      if (isMeal) {
        const result = Object.keys(storageProgessRecipes.meals).indexOf(idCurrentRecipe);
        if (result >= 0) {
          console.log(result, storageProgessRecipes.meals[idCurrentRecipe]);
          setUseIngri(storageProgessRecipes.meals[idCurrentRecipe]);
        }
        console.log(idCurrentRecipe, Object.keys(storageProgessRecipes.meals), 'recipes');
      } else {
        console.log(idCurrentRecipe, Object.keys(storageProgessRecipes.cocktails), 'recipes');
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const [, type, id] = location.pathname.split('/');
      const productType = { comidas: 'meals', bebidas: 'drinks' };
      const foodDetailRequest = await fetchProductDetailsById(id, type);
      const foodDetail = foodDetailRequest[productType[type]][0];

      const ingredientFilter = Object
        .keys(foodDetail).filter(
          (key) => key.includes('strIngredient') && foodDetail[key],
        );

      setIsMeal(type === 'comidas');
      setFoodDetails(foodDetail);
      setIngredients(ingredientFilter);

      handleInProgress(id);
      console.log(() => handleInProgress(), 'test');
    };

    fetchData();
  }, [location.pathname]);

  const creatLocalObj = (usedIngridients) => {
    let result = { ...inProgress };

    if (!isMeal) {
      result = {
        cocktails: { ...inProgress.cocktails, [foodDetails.idDrink]: [...usedIngridients] },
        meals: { ...inProgress.meals },
      };
      // result.cocktails[foodDetails.idDrink] = [...usedIngridients];
    } else {
      result = {
        meals: { ...inProgress.meals, [foodDetails.idMeal]: [...usedIngridients] },
        cocktails: { ...inProgress.cocktails },
      };
    } console.log(inProgress.cocktails, 'drinks');
    console.log(result, 'oi');
    localStorage.setItem('inProgressRecipes', JSON.stringify(result));
  };

  const handleCheckBox = (name) => {
    let usedIngredients = [...usedIngri];
    const index = usedIngredients.indexOf(name);
    if (index >= 0) {
      usedIngredients.splice(index, 1);
    } else {
      usedIngredients = [...usedIngredients, name];
    }
    setUseIngri(usedIngredients);
    creatLocalObj(usedIngredients);
  };

  if (!Object.keys(foodDetails).length) return <h2>Loading...</h2>;

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ isMeal ? foodDetails.strMealThumb : foodDetails.strDrinkThumb }
        alt={ foodDetails.strMeal }
        width="300px"
      />
      <h2 data-testid="recipe-title">
        {isMeal ? foodDetails.strMeal : foodDetails.strDrink}
      </h2>
      <h3 data-testid="recipe-category">
        { isMeal ? foodDetails.strCategory : foodDetails.strAlcoholic}
      </h3>
      <button
        type="button"
        onClick={ () => {
          const link = window.location.href.split('/in-progress')[0];
          const one = 1000;
          copy(link); setHidden(true);
          setTimeout(() => setHidden(false), one);
        } }
        data-testid="share-btn"
      >
        <img src={ shareIcon } alt="Share" />
        <span hidden={ !hidden }>Link copiado!</span>
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ () => setIsFavorite(!isFavorite) }
      >
        <img src={ isFavorite ? blackHeartIcon : whiteHeartIcon } alt="Favorite" />
      </button>
      {
        ingredients.map((ingredient, index) => {
          const ingredientName = foodDetails[ingredient];
          const ingMeasure = foodDetails[ingredient.replace('Ingredient', 'Measure')];

          return (
            <div key={ ingredient } data-testid={ `${index}-ingredient-step` }>
              { usedIngri.indexOf(ingredientName) >= 0
                ? <s>{`${ingredientName} - ${ingMeasure}`}</s>
                : `${ingredientName} - ${ingMeasure}` }

              <input

                onChange={ ({ target }) => { handleCheckBox((target.value)); } }
                type="checkbox"
                value={ `${ingredientName}` }
                checked={ usedIngri.indexOf(ingredientName) >= 0 && 'checked' }
              />
            </div>
          );
        })
      }
      <p data-testid="instructions">{foodDetails.strInstructions}</p>

      <button type="button" data-testid="finish-recipe-btn">Finalizar Receita</button>
    </div>
  );
};
export default Detalhes;
