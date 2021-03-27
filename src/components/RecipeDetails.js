import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import Context from '../context/Context';
import Recommended from './Recommended';
import Ingredients from './Ingredients';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
// import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../styles/RecipeDetails.css';

function RecipeDetails({ recipeType, route, status }) {
  const { isFetching, recipeDetails, copyURL, setCopyURL } = useContext(Context);

  function shareLink() {
    copy(window.location.href);
    setCopyURL(true);
    // https://github.com/feross/clipboard-copy
  }

  function favoriteRecipe(recipe) {
    // console.log(recipe);
    const id = recipe[`id${recipeType}`];
    const type = recipeType;
    const area = recipe.strArea;
    const category = recipe.strCategory;
    const alcoholicOrNot = recipe.strAlcoholic === 'Alcoholic';
    const name = recipe[`str${recipeType}`];
    const image = recipe[`str${recipeType}Thumb`];
    // const doneDate = '';
    // const tags = recipe.strTags;
    const favorite = JSON.stringify([
      { id, type, area, category, alcoholicOrNot, name, image },
    ]);
    /*     if (done === true) {
      favorite = JSON.stringify([
        { id, type, area, category, alcoholicOrNot, name, image, doneDate, tags },
      ]);
      return favorite;
    } if (done === false) {
      favorite = JSON.stringify([
        { id, type, area, category, alcoholicOrNot, name, image },
      ]);
      return favorite;
    } */
    localStorage.setItem('favoriteRecipes', favorite);
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
        <button
          type="button"
          data-testid="favorite-btn"
          className="favorite-btn"
          onClick={ () => favoriteRecipe(recipe) }
        >
          <img
            alt="Favorite"
            src={ /* favorite ? blackHeartIcon : whiteHeartIcon */ whiteHeartIcon }
          />
        </button>
        { copyURL ? <p>Link copiado!</p> : null }
        <h5 data-testid="recipe-category">
          { recipe.strCategory }
          {recipeType === 'Drink' ? recipe.strAlcoholic : null}
        </h5>
        <Ingredients status={ status } id={ recipe[`id${recipeType}`] } />
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
              // onClick={ () =>  }
            >
              { status === 'ongoing' ? 'Continuar Receita' : 'Start Recipe' }
            </Link>
          ) : null
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
