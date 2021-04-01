import React from 'react';
import PropTypes from 'prop-types';
import './CardFavorite.css';

import shareIcon from '../../images/shareIcon.svg';
import favIcon from '../../images/blackHeartIcon.svg';

function CardFavorites({ img, alt, title, desc }) {
  return (
    <div className="cardFav-container">
      <img className="imagem-fav" src={ img } alt={ alt } />
      <div className="cardFav-content">
        <p>{desc}</p>
        <h3>{title}</h3>
        <div className="iconFav">
          <img className="favorite-btn icon-fav" src={ shareIcon } alt="share" />
          <img className="icon-fav share-btn " src={ favIcon } alt="favotire" />
        </div>
      </div>
    </div>
  );
}

CardFavorites.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default CardFavorites;
