import React, { useContext } from 'react';
// import { Redirect } from 'react-router';
import Context from '../context/Context';
import Recommended from './Recommended';
import Ingredients from './Ingredients';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
// import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../styles/RecipeDetails.css';

function RecipeDetails({ recipeType, status }) {
  const { isFetching, recipeDetails } = useContext(Context);

  function renderDetailsHeader() {
    const recipe = Object.values(recipeDetails[0])[0][0];
    // let shouldRedirect = false;

    /* if (shouldRedirect === true) {
      return <Redirect to={ `/${route}/${recipe[`id${recipeType}`]}/in-progress` } />;
    } */

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
        <button type="button" data-testid="share-btn">
          <img alt="Share" src={ shareIcon } />
        </button>
        <button type="button" data-testid="favorite-btn">
          <img
            alt="Favorite"
            src={ /* favorite ? blackHeartIcon : whiteHeartIcon */ whiteHeartIcon }
          />
        </button>
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
        <button
          id="last-btn"
          type="button"
          data-testid="start-recipe-btn"
        >
          Start Recipe
        </button>
      </section>
    );
  }

  return (
    recipeDetails && (isFetching
      ? <p>Loading...</p>
      : renderDetailsHeader())
  );
}

export default RecipeDetails;
