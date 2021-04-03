import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import Copy from 'clipboard-copy';

import DrinkCarousel from '../../components/carousel/DrinkCarousel';
import RecipesContext from '../../ContextApi/RecipesContext';
import ShareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

export default function FoodDetails({ match: { params } }) {
  const { recipeDetails, setSearchParam } = useContext(RecipesContext);
  const [recipeById, setRecipeById] = useState();
  const [favorite, setFavorite] = useState(false);
  const [copyLink, setCopyLink] = useState(false);
  const { id } = params;

  const storageRecipe = JSON.parse(localStorage.getItem('inProgressRecipes'));
  const progressRecipe = storageRecipe && storageRecipe.includes(id);

  useEffect(() => {
    setSearchParam({
      selectedParam: 'food-details',
      id,
    });
  }, [id, setSearchParam]);

  useEffect(() => {
    setRecipeById(recipeDetails);
  }, [recipeDetails]);

  if (!recipeById) return <div>Loading...</div>;

  // Vídeo da receita

  const ytVideo = () => (
    recipeById.strYoutube ? <iframe
      frameBorder="0"
      data-testid="video"
      key={ recipeById.strYoutube }
      src={ recipeById.strYoutube.split('watch?v=').join('embed/') }
      title="recipe video"
    />
      : ''
  );

  // Acessando chaves ingredient e measure da receita

  const ingredients = Object.keys(recipeById)
    .filter((item) => item.includes('strIngredient')
    && recipeById[item])
    .map((ingredient) => recipeById[ingredient]);

  const measures = Object.keys(recipeById)
    .filter((item) => item.includes('strMeasure')
    && recipeById[item])
    .map((measure) => recipeById[measure]);

  // Salvando receita no localStorage
  function setLocalStorage() {
    const recipe = JSON.stringify(id);
    localStorage.setItem('inProgressRecipes', recipe);
  }

  function favoriteRecipe() {
    const recipe = [{
      id: recipeById.idMeal,
      type: 'Comida',
      area: recipeById.strArea,
      category: recipeById.strCategory,
      alcoholicOrNot: '',
      name: recipeById.strMeal,
      image: recipeById.strMealThumb,
    }];
    localStorage.setItem('favoriteRecipes', JSON.stringify(recipe));
    setFavorite(!favorite);
  }

  // function handleCopyLink() {
  //   setCopyLink(true);
  //   Copy(`http://localhost:3000/comidas/${id}`);
  // }

  return (
    <div style={ { width: '50%' } }>
      <figure className="figure">
        <img
          src={ recipeById.strMealThumb }
          data-testid="recipe-photo"
          className="figure-img img-fluid rounded"
          alt="Thumbnail"
        />
      </figure>
      <h1 data-testid="recipe-title">
        {recipeById.strMeal}
      </h1>
      <input
        type="image"
        data-testid="share-btn"
        // onClick={ handleCopyLink }
        onClick={ () => {
          Copy(window.location.href);
          setCopyLink(true);
        } }
        src={ ShareIcon }
        alt="share"
      />
      <input
        type="image"
        data-testid="favorite-btn"
        onClick={ favoriteRecipe }
        src={ (favorite) ? blackHeartIcon : whiteHeartIcon }
        alt="favorite"
      />
      <br />
      {copyLink && <span>Link copiado!</span>}
      <h5 data-testid="recipe-category">
        <b>
          {recipeById.strCategory}
        </b>
      </h5>
      <h2>Ingredientes</h2>
      {console.log(recipeById)}
      <ul>
        {
          ingredients
            .map((item, index) => (
              <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
                {`${item} - ${measures[index]}`}
              </li>))
        }
      </ul>
      <section>
        <h2>Instruções</h2>
        <p data-testid="instructions">{recipeById.strInstructions}</p>
        {ytVideo()}
      </section>
      <DrinkCarousel />
      <Link
        style={ { position: 'fixed', bottom: '0px' } }
        data-testid="start-recipe-btn"
        to={ `/comidas/${id}/in-progress` }
        onClick={ setLocalStorage }
      >
        {progressRecipe ? 'Continuar Receita' : 'Iniciar Receita'}
      </Link>
    </div>
  );
}

FoodDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
