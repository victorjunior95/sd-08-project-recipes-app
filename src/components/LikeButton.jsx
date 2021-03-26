import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import likeBtn from '../images/whiteHeartIcon.svg';
import likedBtn from '../images/blackHeartIcon.svg';
import dislikeRecipeAction from '../redux/actions/dislikeRecipeAction';

export default function LikeButton({ likedProp, recipeIndex }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(dislikeRecipeAction(recipeIndex));
  }

  return (
    <button
      type="button"
      onClick={ handleClick }
    >
      <img
        alt="like-icon"
        src={ (likedProp) ? likedBtn : likeBtn }
        data-testid="favorite-btn"

      />
    </button>
  );
}

LikeButton.propTypes = {
  likedProp: PropTypes.bool,
  recipeIndex: PropTypes.number.isRequired,
};

LikeButton.defaultProps = {
  likedProp: false,
};
