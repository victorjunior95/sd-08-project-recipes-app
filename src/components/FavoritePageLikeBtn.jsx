import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import likedBtn from '../images/blackHeartIcon.svg';
import favoriteRecipesAction from '../redux/actions/favoriteRecipeAction';

export default function FavoritePageLikeBtn({
  dataTestId,
  recipeId,
  reRender,
  setReRender,
}) {
  const dispatch = useDispatch();
  const recipeStorage = (localStorage.getItem('favoriteRecipes'))
    ? JSON.parse(localStorage.getItem('favoriteRecipes'))
    : [];

  function handleClick() {
    localStorage.setItem('favoriteRecipes', JSON
      .stringify(recipeStorage.filter((e) => e.id !== recipeId)));
    setReRender(!reRender);
    dispatch(favoriteRecipesAction(recipeStorage.filter((e) => e.id !== recipeId)));
  }

  return (
    <button
      type="button"
      onClick={ handleClick }
    >
      <img
        alt="like-icon"
        src={ likedBtn }
        data-testid={ dataTestId }

      />
    </button>
  );
}

FavoritePageLikeBtn.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  recipeId: PropTypes.string.isRequired,
  reRender: PropTypes.bool.isRequired,
  setReRender: PropTypes.func.isRequired,
};
