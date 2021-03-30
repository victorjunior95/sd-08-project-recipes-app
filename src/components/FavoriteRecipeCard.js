import React, { useState } from 'react';
import { useHistory } from 'react-router';
import CopyToClipboard from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const FOUR_SECONDS = 4000;

function FavoriteRecipeCard({ recipe, index }) {
  const history = useHistory();
  const [copied, setCopied] = useState('');
  // const index = 0;
  async function removeFromFavorite() {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const updatedFavoriteRecipes = favoriteRecipes
      .filter((favorita) => favorita.id !== recipe.id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavoriteRecipes));
  }

  return (
    <main>
      {
        recipe.type === 'meal'
          ? (
            <section>
              <input
                type="text"
                data-testid={ `${index}-horizontal-name` }
                onClick={ () => history.push(`/comidas/${recipe.id}`) }
                value={ recipe.name }
                readOnly
              />
              <input
                type="image"
                src={ recipe.image }
                data-testid={ `${index}-horizontal-image` }
                alt={ `Recipe: ${recipe.name}` }
                onClick={ () => history.push(`/comidas/${recipe.id}`) }
              />
              <p data-testid={ `${index}-horizontal-top-text` }>{recipe.category}</p>
              <p>{recipe.area}</p>
              <CopyToClipboard
                text={ `http://localhost:3000/comidas/${recipe.id}` }
                onCopy={ () => {
                  setCopied(index);
                  setTimeout(() => setCopied(''), FOUR_SECONDS);
                } }
              >
                <button
                  data-testid={ `${index}-horizontal-share-btn` }
                  type="button"
                >
                  Compartilhar
                </button>
              </CopyToClipboard>
              {
                copied === index
                  ? <span style={ { color: 'red' } }>Link copiado!</span>
                  : null
              }
              <input
                type="image"
                src={ blackHeartIcon }
                alt="unfavorite"
                onClick={ () => removeFromFavorite() }
              />
            </section>
          )
          : (
            <section>
              <input
                type="text"
                data-testid={ `${index}-horizontal-name` }
                onClick={ () => history.push(`/bebidas/${recipe.id}`) }
                value={ recipe.name }
                readOnly
              />
              <input
                type="image"
                src={ recipe.image }
                data-testid={ `${index}-horizontal-image` }
                alt={ `Recipe: ${recipe.name}` }
                onClick={ () => history.push(`/bebidas/${recipe.id}`) }
              />
              <p>{recipe.alcoholicOrNot}</p>
              <CopyToClipboard
                text={ `http://localhost:3000/bebidas/${recipe.id}` }
                onCopy={ () => {
                  setCopied(index);
                  setTimeout(() => setCopied(''), FOUR_SECONDS);
                } }
              >
                <button
                  data-testid={ `${index}-horizontal-share-btn` }
                  type="button"
                >
                  Compartilhar
                </button>
              </CopyToClipboard>
              {
                copied === index
                  ? <span style={ { color: 'red' } }>Link copiado!</span>
                  : null
              }
              <input
                type="image"
                src={ blackHeartIcon }
                alt="unfavorite"
                onClick={ () => removeFromFavorite() }
              />
            </section>
          )
      }
    </main>
  );
}

FavoriteRecipeCard.propTypes = {
  recipe: PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default FavoriteRecipeCard;
