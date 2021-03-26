import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import Recommended from './Recommended';
import Ingredients from './Ingredients';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
// import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../styles/RecipeDetails.css';

function RecipeDetails({ recipeType, status, route }) {
  const { isFetching, recipeDetails } = useContext(Context);

  function shareLink() {
    const share = document.body.appendChild(document.createElement('input'));
    share.value = window.location.href;
    share.select();
    document.execCommand('copy');
    share.parentNode.removeChild(share);
    const shareMessage = document.querySelector('.share');
    shareMessage.innerHTML = 'Link copiado!';
    // https://orclqa.com/copy-url-clipboard/
  }

  function renderDetails() {
    const recipe = Object.values(recipeDetails[0])[0][0];

    return (
      <section key={ recipe[`id${recipeType}`] }>
        <img
          alt="Recipe thumbnail"
          data-testid="recipe-photo"
          src={ recipe[`str${recipeType}Thumb`] }
          height="100"
        />
        <h1 data-testid="recipe-title">
          { recipe[`str${recipeType}`] }
        </h1>
        <button
          type="button"
          data-testid="share-btn"
          className="share-btn"
          id="share-btn"
          onClick={ () => shareLink() }
        >
          <img alt="Share" src={ shareIcon } />
        </button>
        <button type="button" data-testid="favorite-btn" className="favorite-btn">
          <img
            alt="Favorite"
            src={ /* favorite ? blackHeartIcon : whiteHeartIcon */ whiteHeartIcon }
          />
        </button>
        <p className="share" />
        <h5 data-testid="recipe-category">
          { recipe.strCategory }
          {recipeType === 'Drink' ? recipe.strAlcoholic : null}
        </h5>
        <Ingredients status={ status } />
        { recipeType === 'Meal'
          ? (
            <div>
              <h5>Video</h5>
              <iframe
                title="Youtube video"
                data-testid="video"
                src={ recipe.strYoutube.replace('watch?v=', 'embed/') }
              >
                <track kind="captions" />
              </iframe>
            </div>
          )
          : null }
        <Recommended recipeType={ recipeType } />
        {
          !status ? (
            <Link
              to={ `/${route}/${recipe[`id${recipeType}`]}/in-progress` }
              className="last-btn"
              data-testid="start-recipe-btn"
            >
              Start Recipe
            </Link>
          ) : (
            <Link
              to={ `/${route}/${recipe[`id${recipeType}`]}/in-progress` }
              className="last-btn"
              data-testid="start-recipe-btn"
            >
              Finalizar Receita
            </Link>
          )
        }

      </section>
    );
  }

  return (
    recipeDetails && (isFetching
      ? <p>Loading...</p>
      : renderDetails())
  );
}

export default RecipeDetails;
