import React, { useContext } from 'react';
import Context from '../context/Context';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
// import blackHeartIcon from '../images/blackHeartIcon.svg';

function RecipeDetails({ recipeType }) {
  const { isFetching, recipeDetails } = useContext(Context);

  function renderDetailsHeader() {
    const details = Object.values(recipeDetails[0])[0];

    console.log(Object.entries(details[0]));
    const NINE = 9;
    const TWENTY_NINE = 29;
    const FOURTY_NINE = 49;
    const ingredientsArray = Object.values(details[0]).slice(NINE, TWENTY_NINE);
    const measureArray = Object.values(details[0]).slice(TWENTY_NINE, FOURTY_NINE);

    return details.map((recipe) => (
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
        </h5>
        <h5>Ingredients</h5>
        <ul>
          {
            ingredientsArray.map((item, index) => (
              item !== '' && item
                ? (
                  <li
                    key={ index }
                    data-testid={ `${index}-ingredient-name-and-measure` }
                  >
                    { `${item} - ${measureArray[index]}` }
                  </li>
                )
                : null
            ))
          }
        </ul>
        <h5>Instructions</h5>
        <p data-testid="instructions">
          { recipe.strInstructions }
        </p>
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
        <section>
          <h5>Recomendadas</h5>
        </section>
        <button
          type="button"
          data-testid="start-recipe-btn"
        >
          Start Recipe
        </button>
      </section>
    ));
  }

  return (
    recipeDetails && (isFetching
      ? <p>Loading...</p>
      : renderDetailsHeader())
  );
}

export default RecipeDetails;
