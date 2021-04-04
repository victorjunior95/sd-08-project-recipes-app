import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

import { fetchProductDetailsById } from '../services';

const Detalhes = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isMeal, setIsMeal] = useState(true);
  const [foodDetails, setFoodDetails] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [hidden, setHidden] = useState(false);
  // const [check, setCheck] = useState(false);
  const [usedIngri, setUseIngri] = useState([]);

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

  const handleCheckBox = (name) => {
    let usedIngredients = [...usedIngri];
    const index = usedIngredients.indexOf(name);
    console.log(name, index);
    if (index >= 0) {
      usedIngredients.splice(index, 1);
    } else {
      usedIngredients = [...usedIngredients, name];
    }
    setUseIngri(usedIngredients);
    console.log(usedIngredients);
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
        onClick={ async () => {
          const link = window.location.href.split('/in-progress')[0];
          const one = 1000;
          copy(link);
          setHidden(true);
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
              {/* { usedIngri.indexOf(ingredientName) >= 0 && '<s>' }
              {`${ingredientName} - ${ingMeasure}`} */}
              { usedIngri.indexOf(ingredientName) >= 0
                ? <s>{`${ingredientName} - ${ingMeasure}`}</s>
                : `${ingredientName} - ${ingMeasure}` }

              <input
                onChange={ ({ target }) => { handleCheckBox((target.value)); } }
                type="checkbox"
                value={ `${ingredientName}` }
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
