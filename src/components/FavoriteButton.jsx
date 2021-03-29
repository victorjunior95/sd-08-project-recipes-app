import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

const favoriteRecipes = [{
  id: '52771',
  type: 'comida',
  area: 'Italian',
  category: 'Vegetarian',
  alcoholicOrNot: '',
  name: 'Spicy Arrabiata Penne',
  image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
}];

const FavoriteButton = (props) => {
  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  const [favRecipes] = useState(JSON.parse(
    localStorage.getItem('favoriteRecipes') || '{}',
  ));
  console.log(favRecipes);
  const [changeButton, setChangeButton] = useState(false);
  const { currentFood } = props;
  let typeRecipe = 'comida';
  const objList = {
    id: currentFood.idMeal || currentFood.idDrink,
    type: typeRecipe,
    area: currentFood.strArea,
    category: currentFood.strCategory,
    alcoholicOrNot: currentFood.strAlcoholic || '',
    name: currentFood.strMeal || currentFood.strDrink,
    image: currentFood.strMealThumb || currentFood.strDrinkThumb,
  };

  function favRecipesBtn() {
    console.log(favRecipes);
    const favoriteList = favRecipes;
    if (changeButton === true) {
      favoriteList.splice(favoriteList.indexOf(objList), 1);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteList));
      setChangeButton(false);
    } else {
      favoriteList.concat(objList);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteList));
      setChangeButton(true);
    }
  }

  useEffect(() => {
    if (currentFood.idMeal === undefined) {
      typeRecipe = 'bebida';
    }
    const recipeId = currentFood.idMeal || currentFood.idDrink;
    const favoriteList = favRecipes.filter((filter) => (
      filter.id === recipeId
    ));
    if (favoriteList.length > 0) {
      setChangeButton(true);
    }
  }, [currentFood]);

  return (
    <input
      type="image"
      src={ changeButton ? blackHeartIcon : whiteHeartIcon }
      alt="share"
      data-testid="favorite-btn"
      onClick={ favRecipesBtn }
    />

  );
};

FavoriteButton.propTypes = {
  currentFood: PropTypes.objectOf.isRequired,
};

export default FavoriteButton;
