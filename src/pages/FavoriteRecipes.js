import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FilterTypeBtn from '../components/FilterTypeBtn';
import Header from '../components/Header';
import ShareButton from '../components/ShareButton';
import FavoritePageLikeBtn from '../components/FavoritePageLikeBtn';

function FavoriteRecipes() {
  const favoriteRecipesStorage = (localStorage.getItem('favoriteRecipes'))
    ? JSON.parse(localStorage.getItem('favoriteRecipes'))
    : [];
  const [filterSelector, setFilterSelector] = useState('all');
  const [reRender, setReRender] = useState(false);

  function handleSelector({ target }) {
    const { value } = target;
    setFilterSelector(value);
  }

  function generateCard(recipe, index) {
    return (
      <div key={ recipe.id }>
        <Link to={ `/${recipe.type}s/${recipe.id}` }>
          <img
            className="card"
            src={ recipe.image }
            alt={ recipe.name }
            data-testid={ `${index}-horizontal-image` }
          />
        </Link>
        <span data-testid={ `${index}-horizontal-top-text` }>
          { (recipe.area) ? `${recipe.area} - ${recipe.category}` : `${recipe.category}` }
          { (recipe.alcoholicOrNot) && <span>{ recipe.alcoholicOrNot }</span> }
        </span>
        <Link to={ `/${recipe.type}s/${recipe.id}` }>
          <h4 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h4>
        </Link>
        <ShareButton
          dataTestId={ `${index}-horizontal-share-btn` }
          recipeId={ recipe.id }
          recipeType={ recipe.type }
        />
        <FavoritePageLikeBtn
          dataTestId={ `${index}-horizontal-favorite-btn` }
          recipeId={ recipe.id }
          reRender={ reRender }
          setReRender={ setReRender }
        />
      </div>
    );
  }

  function generateListOfCards() {
    if (favoriteRecipesStorage.length === 0) {
      return (
        <div>No favorite recipes yet!</div>
      );
    }
    if (filterSelector === 'all' && favoriteRecipesStorage) {
      return (
        <div>
          { favoriteRecipesStorage.map((recipe, index) => generateCard(recipe, index)) }
        </div>
      );
    }
    if (filterSelector === 'food' && favoriteRecipesStorage) {
      const filteredRecipes = favoriteRecipesStorage
        .filter((elem) => elem.type === 'comida');
      return (
        <div>
          { filteredRecipes.map((recipe, index) => generateCard(recipe, index)) }
        </div>
      );
    }
    if (filterSelector === 'drinks' && favoriteRecipesStorage) {
      const filteredRecipes = favoriteRecipesStorage
        .filter((elem) => elem.type === 'bebida');
      return (
        <div>
          { filteredRecipes.map((recipe, index) => generateCard(recipe, index)) }
        </div>
      );
    }
  }

  return (
    <section>
      <Header />
      <FilterTypeBtn handleSelector={ handleSelector } />
      { generateListOfCards() }
    </section>
  );
}

export default FavoriteRecipes;
