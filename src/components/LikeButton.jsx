import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import likeBtn from '../images/whiteHeartIcon.svg';
import likedBtn from '../images/blackHeartIcon.svg';
import dislikeRecipeAction from '../redux/actions/dislikeRecipeAction';

export default function LikeButton({ likedProp, recipeId, dataTestId }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(dislikeRecipeAction(recipeId));
  }

  return (
    <button
      type="button"
      onClick={ handleClick }
    >
      <img
        alt="like-icon"
        src={ (likedProp) ? likedBtn : likeBtn }
        data-testid={ dataTestId }

      />
    </button>
  );
}

LikeButton.propTypes = {
  likedProp: PropTypes.bool,
  recipeId: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
};

LikeButton.defaultProps = {
  likedProp: false,
  dataTestId: 'favorite-btn',
};
