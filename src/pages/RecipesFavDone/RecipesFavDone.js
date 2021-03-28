import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import './recipesFavDone.css';
import CardRecipe from '../../components/CardRecipe/CardRecipe';

const RecipesFavDone = ({ title, visible }) => {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  useEffect(() => {
    if (localStorage.getItem('doneRecipes') === null) {
      localStorage.setItem('doneRecipes', JSON.stringify([]));
    }
    if (localStorage.getItem('favoriteRecipes') === null) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
    const localFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const localDone = JSON.parse(localStorage.getItem('doneRecipes'));
    setDoneRecipes(localDone);
    setFavoriteRecipes(localFavorite);
  }, []);
  return (
    <div>
      <Header title={title} visible={visible} />
      <div
        className="btn-group btn-filters"
        role="group"
        aria-label="Basic example"
      >
        <button
          type="button"
          className="btn btn-info"
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-info"
          data-testid="filter-by-food-btn"
        >
          Food
        </button>
        <button
          type="button"
          className="btn btn-info"
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </div>
      {title === 'Receitas Feitas' &&
        doneRecipes.length > 0 &&
        doneRecipes.map((recipe, index) => (
          <CardRecipe
            key={index}
            id={recipe.id}
            type={recipe.type}
            index={index}
            image={recipe.image}
            alcoholicOrNot={recipe.alcoholicOrNot}
            area={recipe.area}
            category={recipe.category}
            name={recipe.name}
            doneDate={recipe.doneDate}
            tags={recipe.tags}
          />
        ))}
      {title === 'Receitas Favoritas' &&
        favoriteRecipes.length > 0 &&
        favoriteRecipes.map((recipe, index) => (
          <CardRecipe
            key={index}
            id={recipe.id}
            type={recipe.type}
            index={index}
            image={recipe.image}
            alcoholicOrNot={recipe.alcoholicOrNot}
            area={recipe.area}
            category={recipe.category}
            name={recipe.name}
            doneDate={null}
            tags={null}
            favorite={true}
          />
        ))}
    </div>
  );
};

RecipesFavDone.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default RecipesFavDone;
