import React, { useContext } from 'react';
import copy from 'clipboard-copy';
import Context from '../context/Context';
import Recommended from './Recommended';
import Ingredients from './Ingredients';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
// import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../styles/RecipeDetails.css';

function RecipeDetails({ recipeType, page }) {
  const {
    isFetching,
    recipeDetails,
    copyURL,
    setCopyURL,
  } = useContext(Context);

  function shareLink() {
    copy((window.location.href).replace('/in-progress', ''));
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

    const newFavorite = { id, type, area, category, alcoholicOrNot, name, image };

    let favoritesArray = [];
    favoritesArray = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    favoritesArray.push(newFavorite);

    localStorage.setItem('favoriteRecipes', JSON.stringify(favoritesArray));
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
        <input
          type="image"
          alt="Share image"
          data-testid="share-btn"
          className="share-btn"
          id="share-btn"
          src={ shareIcon }
          onClick={ () => shareLink() }
        />
        <input
          type="image"
          alt="Favorite image"
          data-testid="favorite-btn"
          className="favorite-btn"
          id="favorite-btn"
          src={ localStorage.getItem('favoriteRecipes')
            && JSON.parse(localStorage.getItem('favoriteRecipes'))
              .some((item) => item.id === recipe[`id${recipeType}`])
            ? blackHeartIcon : whiteHeartIcon }
          onClick={ () => favoriteRecipe(recipe) }
        />
        { copyURL ? <p>Link copiado!</p> : null }
        <h5 data-testid="recipe-category">
          { recipe.strCategory }
          {recipeType === 'Drink' ? recipe.strAlcoholic : null}
        </h5>
        <Ingredients page={ page } id={ recipe[`id${recipeType}`] } />
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
      </section>
    );
  }

  return (
    recipeDetails.length && (isFetching
      ? <p>Loading...</p>
      : renderDetails())
  );
}

export default RecipeDetails;
