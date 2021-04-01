import React from 'react';
import PropTypes from 'prop-types';
import './CardFavorite.css';

import shareIcon from '../../images/shareIcon.svg';
import favIcon from '../../images/blackHeartIcon.svg';

function CardFavorites({ img, index, alt, title, desc }) {
  return (
    <div className="cardFav-container">
      <img
        className="imagem-fav"
        data-testid={ `${index}-horizontal-image` }
        src={ img }
        alt={ alt }
      />
      <div className="cardFav-content">
        <p data-testid={ `${index}-horizontal-top-text` }>{desc}</p>
        <h3 data-testid={ `${index}-horizontal-name` }>{title}</h3>
        <div className="iconFav">
          <img
            data-testid={ `${index}-horizontal-share-btn` }
            className="favorite-btn icon-fav"
            src={ shareIcon }
            alt="share"
          />
          <img
            data-testid={ `${index}-horizontal-favorite-btn` }
            className="icon-fav share-btn "
            src={ favIcon }
            alt="favotire"
          />
        </div>
      </div>
    </div>
  );
}

CardFavorites.propTypes = {
  img: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default CardFavorites;
