import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import copy from 'clipboard-copy';
import { useIsMeal } from '../../services/customHooks';
import { loadFromStorage, saveOnStorage } from '../../services/utils';
import { saveFavorites } from '../../redux/actions/details';

import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

function favConstructor(actualRecipe, isMeal) {
  if (isMeal) {
    return {
      id: actualRecipe.idMeal,
      type: 'Meal',
      area: actualRecipe.strArea,
      category: actualRecipe.strCategory,
      alcoholicOrNot: '',
      name: actualRecipe.strDrink,
      image: actualRecipe.strMealThumb,
    };
  }
  return {
    id: actualRecipe.idDrink,
    type: 'Beverage',
    area: '',
    category: actualRecipe.strCategory,
    alcoholicOrNot: actualRecipe.strAlcoholic,
    name: actualRecipe.strMeal,
    image: actualRecipe.strMealThumb,
  };
}

function filterRemoveRecipe(actualRecipe, favorites, isMeal) {
  if (favorites === null) return [];
  const notMatches = favorites.filter((e) => {
    if (isMeal) {
      return e.idMeal !== actualRecipe.id;
    }
    return e.idDrink !== actualRecipe.id;
  });
  return notMatches;
}

function filterMatchRecipe(actualRecipe, favorites, isMeal) {
  if (favorites === null) return [];
  return favorites.filter((e) => {
    if (isMeal) {
      return e.idMeal === actualRecipe.id;
    }
    return e.idDrink === actualRecipe.id;
  });
}

function isInFavorites(actualRecipe, favorites, isMeal) {
  const matches = filterMatchRecipe(actualRecipe, favorites, isMeal);
  if (matches.length < 1) {
    return false;
  }
  return true;
}

function favoriting(actualRecipe, favorites, isMeal, dispatch) {
  if (favorites.length < 1) {
    const newFavorites = [];
    newFavorites.push(favConstructor(actualRecipe, isMeal));
    dispatch(saveFavorites(newFavorites));
  } else if (isInFavorites(actualRecipe, favorites, isMeal)) {
    const filteredFavorites = filterRemoveRecipe(actualRecipe, favorites, isMeal);
    dispatch(saveFavorites(filteredFavorites));
  } else {
    favorites.push(favConstructor(actualRecipe, isMeal));
    dispatch(saveFavorites(favorites));
  }
}

export default function ShareFavBtn() {
  const { actualRecipe, favorites } = useSelector((state) => state.detailsReducer);
  const isMeal = useIsMeal();
  const [copied, setCopied] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const storageFav = loadFromStorage('favoriteRecipes');
    if (storageFav != null) {
      dispatch(saveFavorites(storageFav));
    }
  }, []);

  useEffect(() => {
    saveOnStorage('favoriteRecipes', favorites);
  }, [favorites]);

  return (
    <div className="share-fav-btn">
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => {
          copy(window.location.href);
          setCopied(true);
        } }
      >
        { copied && <span>Link copiado!</span> }
        <img src={ shareIcon } alt="Share Button" />
      </button>

      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ () => favoriting(actualRecipe, favorites, isMeal, dispatch) }
      >
        {
          isInFavorites(actualRecipe, favorites, isMeal) ? <img src={ blackHeartIcon } alt="Favorite Button" />
            : <img src={ whiteHeartIcon } alt="Favorite Button" />
        }
      </button>
    </div>
  );
}
