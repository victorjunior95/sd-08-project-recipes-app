import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShareButton from '../components/ShareButton';
import FavButton from '../components/FavButton';

function RecipesDoneAndFavorite({ location: { pathname } }) {
  const { done, favorite } = useSelector((state) => state.recipes);
  const [recipes, setRecipes] = useState([]);
  const [isDone, setIsDone] = useState();
  const [filter, setFilter] = useState('todos');

  useEffect(() => {
    if (pathname.endsWith('feitas')) {
      setRecipes(done);
      setIsDone(true);
    } else {
      setIsDone(false);
      setRecipes(favorite);
    }
  }, [pathname, favorite]);

  return (
    <div>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => setFilter('todos') }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => setFilter('comida') }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => setFilter('bebida') }
      >
        Drinks
      </button>
      {recipes.filter(({ type }) => type === filter || filter === 'todos')
        .map((recipe, index) => (
          <div key={ recipe.id }>
            <Link to={ `/${recipe.type}s/${recipe.id}` }>
              <img
                src={ recipe.image }
                alt={ recipe.name }
                data-testid={ `${index}-horizontal-image` }
              />
              <h1 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h1>
            </Link>
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              { recipe.type.startsWith('comida')
              && `${recipe.area} - ${recipe.category}` }
              { recipe.type.startsWith('bebida') && recipe.alcoholicOrNot }
            </p>
            { isDone && (
              <p data-testid={ `${index}-horizontal-done-date` }>
                {recipe.doneDate}
              </p>
            )}
            <ShareButton id={ recipe.id } index={ index } type={ `${recipe.type}s` } />
            {isDone && (
              recipe.tags.map((tag, tagIndex) => (
                <p
                  key={ `${recipe.id}-tag-${tagIndex}` }
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                >
                  { tag }
                </p>
              ))
            )}
            <FavButton index={ index } type={ `${recipe.type}s` } recipe={ recipe } />
          </div>
        ))}
    </div>

  );
}

RecipesDoneAndFavorite.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipesDoneAndFavorite;
