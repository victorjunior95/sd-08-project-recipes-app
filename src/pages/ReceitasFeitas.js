import React, { useState, useEffect, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { NavLink } from 'react-router-dom';
import HeaderP from '../components/HeaderP';
import shareIcon from '../images/shareIcon.svg';
import Context from '../context/Context';

import '../styles/ReceitasFeitas.css';

function ReceitasFeitas() {
  const [recipesCompleted, setRecipesCompleted] = useState('All');
  const [filterRecipesCompleted, setFilterRecipesCompleted] = useState([]);

  const { copyClipboard, setCopyClipboard } = useContext(Context);

  const updateRecipesCompleted = () => {
    const loadDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    console.log(loadDoneRecipes);
    switch (recipesCompleted) {
    case 'All':
      return loadDoneRecipes;
    case 'Food':
      return loadDoneRecipes.filter((recipes) => recipes.type === 'comidas');
    case 'Drinks':
      return loadDoneRecipes.filter((recipes) => recipes.type === 'bebidas');
    default:
      console.log('Selecione uma categoria');
    }
  };

  const urlRecipe = (type, idRecipe) => `http://localhost:3000/${type}s/${idRecipe}`;

  const changeFilter = (value) => {
    console.log(value);
    if (value === recipesCompleted) setRecipesCompleted('All');
    else setRecipesCompleted(value);
  };

  useEffect(() => {
    setFilterRecipesCompleted(updateRecipesCompleted());
  }, [recipesCompleted]);

  return (
    <div>
      <HeaderP title="Receitas Feitas" />
      <hr />
      <div className="btns-recipes-completed">
        <button
          type="button"
          value="All"
          onClick={ (event) => changeFilter(event.target.value) }
          data-testid="filter-by-all-btn"
          className="btn-recipes-completed"
        >
          All
        </button>
        <button
          type="button"
          value="Food"
          onClick={ (event) => changeFilter(event.target.value) }
          data-testid="filter-by-food-btn"
          className="btn-recipes-completed"
        >
          Food
        </button>
        <button
          type="button"
          value="Drinks"
          onClick={ (event) => changeFilter(event.target.value) }
          data-testid="filter-by-drink-btn"
          className="btn-recipes-completed"
        >
          Drinks
        </button>
      </div>
      <br />
      <br />
      <div>
        { filterRecipesCompleted && (
          filterRecipesCompleted.map((recipe, index) => (
            <div
              key={ `${index}-${recipe.name}` }
            >
              <div>
                <NavLink to={ `${recipe.type}/${recipe.idRecipe}` }>
                  <img
                    className="recipe-horizontal-image"
                    src={ recipe.image }
                    alt={ recipe.name }
                    data-testid={ `${index}-horizontal-image` }
                  />
                </NavLink>
              </div>
              <div>
                {
                  recipe.type === 'comidas' ? (
                    <span
                      data-testid={ `${index}-horizontal-top-text` }
                    >
                      { `${recipe.area} - ${recipe.category}` }
                    </span>
                  ) : (
                    <span
                      data-testid={ `${index}-horizontal-top-text` }
                    >
                      { recipe.alcoholicOrNot }
                    </span>
                  )
                }
                <div>
                  <NavLink to={ `${recipe.type}/${recipe.idRecipe}` }>
                    <span
                      data-testid={ `${index}-horizontal-name` }
                    >
                      { recipe.name }
                    </span>
                  </NavLink>
                </div>
                <span
                  data-testid={ `${index}-horizontal-done-date` }
                >
                  { `Feita em: ${recipe.doneDate}` }
                </span>
                <span
                  key={ recipe.tags }
                  data-testid={ `${index}-${recipe.tags}-horizontal-tag` }
                >
                  { recipe.tags }
                </span>
              </div>
              <div>
                <CopyToClipboard text={ urlRecipe(recipe.type, recipe.idRecipe) }>
                  <button
                    onClick={ () => setCopyClipboard('visible') }
                    type="button"
                  >
                    <img
                      src={ shareIcon }
                      data-testid={ `${index}-horizontal-share-btn` }
                      alt="share button"
                    />
                  </button>
                </CopyToClipboard>
              </div>
              <small style={ { visibility: copyClipboard } }>Link copiado!</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ReceitasFeitas;
