import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function DoneRecipeCard({ recipe }) {
  const index = 0;
  return (
    <section>
      {
        recipe.type === 'meal'
          ? (
            <section>
              <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
              <p data-testid={ `${index}-horizontal-image` }>{recipe.image}</p>
              <p data-testid={ `${index}-horizontal-top-text` }>{recipe.category}</p>
              <p>{recipe.area}</p>
              <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
              {recipe.tags.map((tag) => (<p
                key={ `${index}-${tag}` }
                data-testid={ `${index}-${tag}-horizontal-tag` }
              />))}
              <CopyToClipboard text={ `localhost:3000/comidas/${recipe.id}` }>
                <button
                  data-testid={ `${index}-horizontal-share-btn` }
                  type="button"
                >
                  Compartilhar
                </button>
              </CopyToClipboard>
              <input
                type="image"
                src={ blackHeartIcon }
                alt="unfavorite"
                onClick={ () => console.log('desfavoritou') }
              />
            </section>
          )
          : (
            <section>
              <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
              <p data-testid={ `${index}-horizontal-image` }>{recipe.image}</p>
              <p>{`Alcoholic: ${recipe.alcoholicOrNot}`}</p>
              <CopyToClipboard text={ `localhost:3000/comidas/${recipe.id}` }>
                <button
                  data-testid={ `${index}-horizontal-share-btn` }
                  type="button"
                >
                  Compartilhar
                </button>
              </CopyToClipboard>
              <input
                type="image"
                src={ blackHeartIcon }
                alt="unfavorite"
                onClick={ () => console.log('desfavoritou') }
              />
            </section>
          )
      }
    </section>
  );
}

DoneRecipeCard.propTypes = {
  recipe: PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
    doneDate: PropTypes.string.isRequired,
    tags: PropTypes.shape({
      map: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DoneRecipeCard;
