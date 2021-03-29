import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { shareIcon, whiteHeartIcon } from '../common/svgStore';

const HeaderRecipeDetails = ({ imgPath, title, category, page, id }) => {
  const [isCopied, setIsCopied] = useState(false);
  const twoSecond = 2000;
  const handleClick = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, twoSecond);
  };
  return (
    <section>
      <img
        src={ imgPath }
        alt="recipe"
        className="image-details"
        data-testid="recipe-photo"
      />
      <h3 data-testid="recipe-title">{title}</h3>
      <h5 data-testid="recipe-category">{category}</h5>
      <CopyToClipboard text={ `http://localhost:3000/${page}/${id}` } onCopy={ handleClick }>
        <input
          type="image"
          src={ shareIcon }
          alt="share icon"
          data-testid="share-btn"
        />
      </CopyToClipboard>
      <input
        type="image"
        src={ whiteHeartIcon }
        alt="white heart icon"
        data-testid="favorite-btn"
      />
      {isCopied ? <p>Link copiado!</p> : ''}
    </section>
  );
};

HeaderRecipeDetails.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default HeaderRecipeDetails;
