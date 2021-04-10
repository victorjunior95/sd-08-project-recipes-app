import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes, fetchRecommendations } from '../actions/recipes';

import Loading from '../components/Loading';
import RecipeCard from '../components/RecipeCard';
import IngredientsList from '../components/IngredientsList';
import ProgressButton from '../components/ProgressButton';
import FavButton from '../components/FavButton';
import ShareButton from '../components/ShareButton';

import './RecipeDetails.css';

function RecipeDetails({ match: { params }, location: { pathname } }) {
  const { list, isFetching, recommendations } = useSelector((state) => state.recipes);
  const { mealsToken, cocktailsToken } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const [shouldFetch, setShouldFetch] = useState(true);
  // const prevList = useRef([...list]);

  // const selectType = { comidas: 'meals', bebidas: 'drinks' };
  // const inProgress = pathname.split('/')[3] === 'in-progress';
  // const type = selectType[pathname.split('/')[1]];
  // const type = pathname.split('/')[1];
  // const recommendationsType = type === 'comidas' ? 'bebidas' : 'comidas';

  const inProgress = pathname.split('/')[3] === 'in-progress';
  // const inProgress = pathname.split('/')[3] === 'in-progress';
  const type = useRef(pathname.split('/')[1]);
  const recommendationsType = useRef(type.current === 'comidas' ? 'bebidas' : 'comidas');

  useEffect(() => {
    // console.log(recommendationsType);
    const token = pathname === '/comidas' ? mealsToken : cocktailsToken;
    setShouldFetch(true);
    [type.current] = pathname.split('/').slice(1);
    recommendationsType.current = type.current === 'comidas' ? 'bebidas' : 'comidas';
    dispatch(fetchRecipes(token, type.current,
      { request: 'lookup', key: 'i', parameter: params.id }));
    dispatch(fetchRecommendations(token, recommendationsType.current));
    setShouldFetch(false);
  }, [params, pathname]);

  const recipe = list[0];
  const IngredientKeys = Object.keys(recipe || {})
    .filter((ingKey) => (
      ingKey
        .startsWith('strIngredient')
        && recipe[ingKey] !== '' && recipe[ingKey] !== null));
  const IngredientsAndMeasures = IngredientKeys
    .map((key, index) => [recipe[key], recipe[`strMeasure${index + 1}`]]);
  // const formatedType = type[0].toUpperCase() + type.slice(1, 0 - 1);

  return (
    isFetching || shouldFetch || !recipe ? <Loading /> : (
      <section>
        <img
          className="recipe-photo"
          data-testid="recipe-photo"
          src={ recipe.image }
          alt={ recipe.name }
        />
        <h1 data-testid="recipe-title">{ recipe.name }</h1>
        <ShareButton type={ type.current } id={ params.id } />
        <FavButton recipe={ recipe } />
        <h2 data-testid="recipe-category">
          { `${recipe.alcoholicOrNot} ${recipe.category}` }
        </h2>
        <IngredientsList
          id={ params.id }
          type={ type.current }
          ingredients={ IngredientsAndMeasures }
        />
        <p data-testid="instructions">{ recipe.strInstructions }</p>
        { recipe.strYoutube
        && <iframe
          src={ recipe.strYoutube.split('watch?v=').join('embed/') }
          title="Video"
          data-testid="video"
        /> }
        { !inProgress && (
          <div className="recommendations">
            { recommendations.map((recommendation, index) => (
              <div data-testid={ `${index}-recomendation-card` } key={ `rec-${index}` }>
                <RecipeCard
                  index={ index }
                  type={ recommendationsType.current }
                  recipe={ recommendation }
                  recommendation
                />
              </div>)) }
          </div>)}
        <ProgressButton
          id={ params.id }
          type={ type.current }
          ingredientsLength={ IngredientsAndMeasures.length }
        />
      </section>
    ));
}

RecipeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeDetails;
