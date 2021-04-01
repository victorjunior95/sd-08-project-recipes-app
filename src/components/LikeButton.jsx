import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import favoriteRecipesAction from '../redux/actions/favoriteRecipeAction';
import notLikedBtn from '../images/whiteHeartIcon.svg';
import likedBtn from '../images/blackHeartIcon.svg';

export default function LikeButton() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const recipes = useSelector((state) => state.recipes.singleRecipe);
  const [liked, setLiked] = useState();

  const type = (pathname.includes('comidas') ? 'Meal' : 'Drink');
  const recipeStorage = (localStorage.getItem('favoriteRecipes'))
    ? JSON.parse(localStorage.getItem('favoriteRecipes'))
    : [];
  const recipe = {
    id: recipes[0][`id${type}`],
    type: (type === 'Meal' ? 'comida' : 'bebida'),
    area: (recipes[0].strArea ? recipes[0].strArea : ''),
    category: recipes[0].strCategory,
    alcoholicOrNot: (type === 'Drink' ? recipes[0].strAlcoholic : ''),
    name: recipes[0][`str${type}`],
    image: recipes[0][`str${type}Thumb`],
  };

  function verifyIfFavorite() {
    const isLiked = recipeStorage.some((e) => e.id === recipe.id);
    return isLiked;
  }

  useEffect(() => {
    setLiked((verifyIfFavorite()));
  }, []);

  function handleClick() {
    if (!liked) {
      recipeStorage.push(recipe);
      localStorage.setItem('favoriteRecipes', JSON.stringify(recipeStorage));
      setLiked(true);
      dispatch(favoriteRecipesAction(recipeStorage));
    }
    if (liked) {
      const removeFavorite = recipeStorage.filter((e) => e.id !== recipe.id);
      console.log(removeFavorite);
      localStorage.setItem('favoriteRecipes', JSON
        .stringify(removeFavorite));
      setLiked(false);
      dispatch(favoriteRecipesAction(removeFavorite));
    }
  }

  return (
    <button
      type="button"
      onClick={ handleClick }
    >
      <img
        alt="like-icon"
        src={ (liked) ? likedBtn : notLikedBtn }
        data-testid="favorite-btn"

      />
    </button>
  );
}
