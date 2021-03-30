import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../actions/recipes';
import FavIcon from '../images/whiteHeartIcon.svg';
import BlackFavIcon from '../images/blackHeartIcon.svg';

function FavButton({ type, recipe }) {
  const favorite = useSelector((state) => state.recipes.favorite);
  const dispatch = useDispatch();
  // const formatedType = type === 'Meal' ? 'comida' : 'bebida';

  const handleClick = () => {
    console.log(favorite);
    const fav = favorite
      .find(
        (currRec) => recipe.id === currRec.id && type.startsWith(currRec.type),
      );
    // const { [`id${type}`]: id, strArea: area = '', strCategory: category = '',
    //   strAlcoholic: alcoholicOrNot = '', [`str${type}`]: name,
    //   [`str${type}Thumb`]: image } = recipe;
    const { id, area, category, alcoholicOrNot, name, image } = recipe;
    const favType = type.slice(0, 0 - 1);
    const favObj = { id, area, category, alcoholicOrNot, name, image, type: favType };
    // const formatedRecipe = {
    //   id, area, category, alcoholicOrNot, name, image, type: formatedType };
    if (fav) {
      dispatch(removeFavorite(favObj));
    } else dispatch(addFavorite(favObj));
  };

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorite));
  }, [favorite]);

  return (
    <button type="button" onClick={ handleClick }>
      <img
        data-testid="favorite-btn"
        src={ favorite
          .some((rec) => recipe.id === rec.id && type.startsWith(rec.type))
          ? BlackFavIcon : FavIcon }
        alt="favorite"
      />
    </button>
  );
}

FavButton.propTypes = {
  recipe: PropTypes.shape().isRequired,
  type: PropTypes.string.isRequired,
};

export default FavButton;
