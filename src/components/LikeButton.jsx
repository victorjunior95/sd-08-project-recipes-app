import React, { useState } from 'react';
import likeBtn from '../images/whiteHeartIcon.svg';
import likedBtn from '../images/blackHeartIcon.svg';

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      type="button"
      onClick={ () => setLiked(!liked) }
    >
      <img
        alt="like-icon"
        src={ (liked) ? likedBtn : likeBtn }
        data-testid="favorite-btn"

      />
    </button>
  );
}
