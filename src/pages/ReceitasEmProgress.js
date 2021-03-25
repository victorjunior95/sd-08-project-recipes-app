import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
// import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

import { fetchProductDetailsById } from '../services';

const Detalhes = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isMeal, setIsMeal] = useState(true);
  const [foodDetails, setFoodDetails] = useState({});
  const [ingredients, setIngredients] = useState([]);
  // const [buttonRecipe, setButtonRecipe] = useState(true);
  // const [spanHidden, setSpanHidden] = useState;

  const location = useLocation();

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
    };

    fetchData();
  }, [location.pathname]);

  // const copyToClipBoard = (text) => {
  //   const urlToShare = text.split('/in-progress');
  //   const finalUrlToShare = urlToShare.join('');
  //   navigator.clipboard.writeText(finalUrlToShare);
  //   setSpanHidden(true);
  // };

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
      <button type="button" onClick={ copyToClipBoard } data-testid="share-btn">
        <img src={ shareIcon } alt="Share" />
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
            <div key={ ingredient }>
              {`${ingredientName} - ${ingMeasure}`}
              <input
                type="checkbox"
                data-testid={ `${index}-ingredient-name-and-measure` }

              />
            </div>
          );
        })
      }
      <p data-testid="instructions">{foodDetails.strInstructions}</p>

      <button type="button" data-testid="start-recipe-btn">Finalizar Receita</button>
    </div>
  );
};
export default Detalhes;
