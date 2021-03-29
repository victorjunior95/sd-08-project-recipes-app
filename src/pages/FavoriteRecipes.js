import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FilterTypeBtn from '../components/FilterTypeBtn';
import Header from '../components/Header';
import ShareButton from '../components/ShareButton';
import LikeButton from '../components/LikeButton';

function FavoriteRecipes() {
  const favoriteRecipes = useSelector((state) => state.favoriteRecipes.recipes);
  const [filterSelector, setFilterSelector] = useState('all');

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
        <span
          data-testid={ `${index}-horizontal-done-date` }
        >
          { `Feita em: ${recipe.doneDate} ` }
        </span>
        <ShareButton
          dataTestId={ `${index}-horizontal-share-btn` }
          recipeId={ recipe.id }
          recipeType={ recipe.type }
        />
        <LikeButton
          dataTestId={ `${index}-horizontal-favorite-btn` }
          likedProp={ recipe.liked }
          recipeId={ recipe.id }
        />
      </div>
    );
  }

  function generateListOfCards() {
    if (filterSelector === 'all') {
      return (
        <div>
          { favoriteRecipes.map((recipe, index) => generateCard(recipe, index)) }
        </div>
      );
    }
    if (filterSelector === 'food') {
      const filteredRecipes = favoriteRecipes.filter((elem) => elem.type === 'comida');
      return (
        <div>
          { filteredRecipes.map((recipe, index) => generateCard(recipe, index)) }
        </div>
      );
    }
    if (filterSelector === 'drinks') {
      const filteredRecipes = favoriteRecipes.filter((elem) => elem.type === 'bebida');
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
