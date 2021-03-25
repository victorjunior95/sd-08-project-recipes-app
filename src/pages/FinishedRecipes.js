import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import ShareButton from '../components/ShareButton';

function FinishedRecipes() {
  const doneRecipes = useSelector((state) => state.doneRecipes.recipes);
  const [filterSelector, setFilterSelector] = useState('all');

  function handleSelector({ target }) {
    const { value } = target;
    setFilterSelector(value);
  }

  function getTags(recipe, index) {
    const tag = recipe.tags;
    if (!tag) return null;
    if (tag) {
      return (
        <>
          { tag.map((e) => (
            <span
              key={ `${index}${e}` }
              data-testid={ `${index}-${e}-horizontal-tag` }
            >
              { e }
            </span>
          ))}
        </>
      );
    }
  }

  function generateCard(recipe, index) {
    return (
      <div key={ recipe.id }>
        <img
          className="card"
          src={ recipe.image }
          alt={ recipe.name }
          data-testid={ `${index}-horizontal-image` }
        />
        <span data-testid={ `${index}-horizontal-top-text` }>
          { (recipe.area) ? `${recipe.area} - ${recipe.category}` : `${recipe.category}` }
          { (recipe.alcoholicOrNot) && <span>{ recipe.alcoholicOrNot }</span> }
        </span>
        <h4 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h4>
        <span
          data-testid={ `${index}-horizontal-done-date` }
        >
          { `Feita em: ${recipe.doneDate} ` }
        </span>
        <ShareButton dataTestId={ `${index}-horizontal-share-btn` } />
        { getTags(recipe, index) }
      </div>
    );
  }

  function generateListOfCards() {
    if (filterSelector === 'all') {
      return (
        <div>
          { doneRecipes.map((recipe, index) => generateCard(recipe, index)) }
        </div>
      );
    }
  }

  return (
    <main>
      <Header />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        value="all"
        onClick={ (e) => handleSelector(e) }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        value="food"
        onClick={ (e) => handleSelector(e) }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        value="drinks"
        onClick={ (e) => handleSelector(e) }
      >
        Drinks
      </button>
      { generateListOfCards() }
    </main>
  );
}

export default FinishedRecipes;

// return (
//     <div key={ food.idMeal }>
//       <img
//         className="card"
//         src={ food.strMealThumb }
//         alt={ food.strMeal }
//         data-testid={ `${index}-horizontal-image` }
//       />
//       <span data-testid={ `${index}-horizontal-top-text` }>{ food.strCategory }</span>
//       <h4 data-testid={ `${index}-horizontal-name` }>{ food.strMeal }</h4>
//       <span
//         data-testid={ `${index}-horizontal-done-date` }
//       >
//         { `Feita em: ${data} ` }
//       </span>
//       <ShareButton data-testid={ `${index}-horizontal-share-btn` } />
//       { getTags(food, index) }
//     </div>
//   );
