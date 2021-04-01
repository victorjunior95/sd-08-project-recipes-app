import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
// import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const DetailsFavoriteRecipes = () => {
  const favorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [copyURL, setCopyURL] = useState(null);
  const d = new Date();
  //   const { id } = match.params;
  console.log(favorite);
  //   console.log(window.location.href.concat(``));
  window.addEventListener('click', () => {

  });

  const shareBtn = (type, id) => {
    copy(window.location.href
      .replace('receitas-favoritas', '')
      .concat(`${type}/${id}`));
    setCopyURL(true);
  };

  return (
    <div>
      {
        favorite.map((recipe, index) => {
          if (recipe.type === 'comida') {
            return (
              <div>
                <img
                  src={ recipe.image }
                  alt={ recipe.name }
                  data-testid={ `${index}-horizontal-image` }
                />
                <p data-testid={ `${index}-horizontal-name` }>{ recipe.name }</p>
                <p data-testid={ `${index}-horizontal-top-text` }>
                  { `${recipe.area} - ${recipe.category}` }
                </p>
                <p data-testid={ `${index}-horizontal-done-date` }>{ d.getDate() }</p>
                <input
                  type="image"
                  alt="Share image"
                  data-testid={ `${index}-horizontal-share-btn` }
                  className="share-btn"
                  id="share-btn"
                  src={ shareIcon }
                  onClick={ () => shareBtn('comidas', recipe.id) }
                />
                <img
                  src={ blackHeartIcon }
                  alt="Share Recipe"
                  data-testid={ `${index}-horizontal-favorite-btn` }
                />
                <span data-testid={ `${index}-Pasta-horizontal-tag` } />
                { copyURL ? <p>Link copiado!</p> : null }
              </div>
            );
          }
          if (recipe.type === 'bebida') {
            return (
              <div>
                <img
                  src={ recipe.image }
                  alt={ recipe.name }
                  data-testid={ `${index}-horizontal-image` }
                />
                <p data-testid={ `${index}-horizontal-name` }>{ recipe.name }</p>
                <p data-testid={ `${index}-horizontal-top-text` }>
                  { recipe.alcoholicOrNot }
                </p>
                <p data-testid={ `${index}-horizontal-done-date` }>{ d.getDate() }</p>
                <input
                  type="image"
                  alt="Share image"
                  data-testid={ `${index}-horizontal-share-btn` }
                  className="share-btn"
                  id="share-btn"
                  src={ shareIcon }
                  onClick={ shareBtn }
                />
                <img
                  src={ blackHeartIcon }
                  alt="Share Recipe"
                  data-testid={ `${index}-horizontal-favorite-btn` }
                />
                <span data-testid={ `${index}-Pasta-horizontal-tag` } />
              </div>
            );
          }
          return 'Não tem favorito';
        })
      }
    </div>
  );
};

DetailsFavoriteRecipes.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
}.isRequired;

export default DetailsFavoriteRecipes;
