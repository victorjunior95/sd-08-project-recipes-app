import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FoodContext from '../../context/comidaContext/FoodContext';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import '../../index.css';

function copyToClipboard(Button, callback) {
  navigator.clipboard.writeText(Button);
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

function CardFoodInProgress({ alreadyFavorited }) {
  const {
    values: {
      detailFoods,
      checkedBox,
    },
    functions: {
      handleCheckedBox,
      setDoneRecipe,
    },
  } = useContext(FoodContext);
  const date = new Date().toLocaleDateString();

  const handleClick = () => {
    localStorage.setItem('doneRecipes', JSON.stringify(
      [{
        id: detailFoods[0].idMeal,
        type: 'comida',
        area: detailFoods[0].strArea,
        category: detailFoods[0].strCategory,
        alcoholicOrNot: '',
        name: detailFoods[0].strMeal,
        image: detailFoods[0].strMealThumb,
        doneDate: date,
        tags: detailFoods[0].strTags,
      }],
    ));
    setDoneRecipe(detailFoods.strMeal);
  };

  const LAST_INGREDIENT = 20;
  const ingredientIndex = [];
  for (let index = 0; index < LAST_INGREDIENT; index += 1) {
    ingredientIndex.push(index);
  }

  const [isCopied, setIsCopied] = useState(false);
  const [favorited, setFavorited] = useState(alreadyFavorited);

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
          {isCopied && <p>Button copiado!</p>}
          <button
            type="button"
            data-testid="favorite-btn"
            onClick={ () => { favorite(favorited, setFavorited, item); } }
          >
            <img src={ (favorited) ? blackHeartIcon : whiteHeartIcon } alt="share" />
          </button>
          <p data-testid="recipe-category">{item.strCategory}</p>
          <ul className="checkbox-list">
            {ingredientIndex.map((index) => {
              const srt = `${item[`strMeasure${index + 1}`]}`;
              if (srt === 'null' || srt === '') return '';
              return (
                <li
                  key={ index }
                  data-testid={ `${index}-ingredient-name-and-measure` }
                  className="checkedBox-false"
                >
                  <input
                    type="checkbox"
                    key={ index }
                    value={ item[`strMeasure${index + 1}`] }
                    onClick={ handleCheckedBox }
                  />
                  {`${item[`strMeasure${index + 1}`]}`
                  + ` ${item[`strIngredient${index + 1}`]}`}
                </li>
              );
            })}
          </ul>
          <p data-testid="instructions">{item.strInstructions}</p>
          <Link
            to="/receitas-feitas"
            type="button"
            key="finalizar"
            onClick={ handleClick }
          >
            Finalizar Receita
          </Link>
        </div>
      ))}
    </section>
  );
}

CardFoodInProgress.propTypes = {
  alreadyFavorited: PropTypes.bool.isRequired,
};

export default CardFoodInProgress;
