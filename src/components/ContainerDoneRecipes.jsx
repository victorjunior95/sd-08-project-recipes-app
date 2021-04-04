import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import { shareIcon } from '../common/svgStore';

const ContainerDoneRecipes = ({
  info: {
    id,
    type,
    area,
    category,
    name,
    image,
    doneDate,
    tags,
  },
  index,
}) => {
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
        src={ image }
        alt="recipe"
        className="image-details"
        data-testid={ `${index}-horizontal-image` }
      />
      <h3 data-testid={ `${index}-horizontal-name` }>{name}</h3>
      {type === 'comida' ? (
        <h5 data-testid={ `${index}-horizontal-top-text` }>
          {`${area} - ${category}`}
        </h5>
      ) : (
        <h5 data-testid={ `${index}-horizontal-top-text` }>
          {`${category}`}
        </h5>
      )}
      <h5 data-testid={ `${index}-horizontal-done-date` }>{doneDate}</h5>
      <CopyToClipboard
        text={ `http://localhost:3000/${type.concat('s')}/${id}` }
        onCopy={ handleClick }
      >
        <input
          type="image"
          src={ shareIcon }
          alt="share icon"
          data-testid={ `${index}-horizontal-share-btn` }
        />
      </CopyToClipboard>
      {isCopied ? <section>Link copiado!</section> : ''}
      <section>
        {tags
          ? tags
            .split(',')
            .slice(0, 2)
            .map((tag) => (
              <span key={ tag } data-testid={ `${index}-${tag}-horizontal-tag` }>
                {tag}
              </span>
            ))
          : ''}
      </section>
    </section>
  );
};

ContainerDoneRecipes.propTypes = {
  info: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    doneDate: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ContainerDoneRecipes;
