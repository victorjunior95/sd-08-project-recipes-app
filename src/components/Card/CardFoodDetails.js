import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import FoodContext from '../../context/comidaContext/FoodContext';
// import GlobalContext from '../../../context/globalContext/GlobalContext';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import '../../index.css';

function copyToClipboard(link, callback) {
  navigator.clipboard.writeText(link);
  callback(true);
}

function favorite(isFavorited, callback, item) {
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (isFavorited) {
    const newFavorites = favorites
      .filter((foodOrDrink) => foodOrDrink.id !== item.idMeal);
    callback(false);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
  } else {
    const newFavorites = [...favorites, {
      id: item.idMeal,
      type: 'comida',
      area: item.strArea,
      category: item.strCategory,
      alcoholicOrNot: '',
      name: item.strMeal,
      image: item.strMealThumb,
    }];
    callback(true);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
  }
}

function CardFoodDetails({ alreadyFavorited }) {
  const {
    values: {
      detailFoods,
    },
  } = useContext(FoodContext);

  // const {
  //   inProgressRecipes: {
  //     meals,
  //   },
  //   functions: {
  //     setMeals,
  //   },
  // } = useContext(GlobalContext);

  const LAST_INGREDIENT = 20;
  const ingredientIndex = [];
  for (let index = 0; index < LAST_INGREDIENT; index += 1) {
    ingredientIndex.push(index);
  }

  const [isCopied, setIsCopied] = useState(false);
  const [favorited, setFavorited] = useState(alreadyFavorited);

  // const recipeStarted = Object.keys(meals).some((id) => id === idDaReceita);
  // function startRecipe() {
  //   const newMeals = { ...meals, [idDaReceita]: }
  //   setMeals()
  // }

  return (
    <section>
      {detailFoods.map((item) => (
        <div key={ item.strMeal } className="imageDetails">
          <img
            src={ item.strMealThumb }
            alt={ item.strMeal }
            data-testid="recipe-photo"
          />
          <h3 data-testid="recipe-title">{item.strMeal}</h3>
          <button
            type="button"
            data-testid="share-btn"
            onClick={ () => { copyToClipboard(item.strSource, setIsCopied); } }
          >
            <img src={ shareIcon } alt="share" />
          </button>
          {isCopied && <p>Link copiado!</p>}
          <button
            type="button"
            data-testid="favorite-btn"
            onClick={ () => { favorite(favorited, setFavorited, item); } }
          >
            <img src={ (favorited) ? blackHeartIcon : whiteHeartIcon } alt="share" />
          </button>
          <p data-testid="recipe-category">{item.strCategory}</p>
          <ul>
            {ingredientIndex.map((index) => {
              const srt = `${item[`strMeasure${index + 1}`]}`;
              if (srt === 'null' || srt === '') return '';
              return (
                <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
                  {`${item[`strMeasure${index + 1}`]}`
                  + ` ${item[`strIngredient${index + 1}`]}`}
                </li>
              );
            })}
          </ul>
          <p data-testid="instructions">{item.strInstructions}</p>
          <p data-testid="video">{item.strYoutube}</p>
          {/* <button
            type="button"
            onClick={ () => { setRedirect(true); } }
          >
            {(recipeStarted) ? 'Continuar Receita' : 'Iniciar Receita'}
          </button> */}
        </div>
      ))}
    </section>
  );
}

CardFoodDetails.propTypes = {
  alreadyFavorited: PropTypes.bool.isRequired,
};

export default CardFoodDetails;
