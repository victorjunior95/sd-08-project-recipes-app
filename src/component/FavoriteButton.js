import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

import {
  getFavoriteRecipes,
  addFavoriteRecipe,
  removeFavoriteRecipe } from '../services/localStorage';

export default function FavoriteButton({ recipeInfo }) {
  const { id } = recipeInfo;

  const [isFavorite, setIsFavorite] = useState();

  useEffect(() => setIsFavorite(getFavoriteRecipes()
    .find(({ id: recipeId }) => recipeId === id)), [setIsFavorite, id]);

  return (
    <button
      type="button"
      data-testid="favorite-btn"
      onClick={ () => {
        if (isFavorite) {
          removeFavoriteRecipe(id);
          setIsFavorite(false);
        } else {
          addFavoriteRecipe(recipeInfo);
          setIsFavorite(true);
        }
      } }
    >
      <img src={ isFavorite ? blackHeartIcon : whiteHeartIcon } alt="share" />
    </button>
  );
}

FavoriteButton.propTypes = {
  recipeInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};
