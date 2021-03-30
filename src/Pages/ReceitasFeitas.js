import React from 'react';
import CardFeitas from '../components/CardFeitas';

import '../styles/ReceitasFeitas.css';

function ReceitasFeitas() {
  const verify = () => {
    if (localStorage.getItem('doneRecipes') !== null) {
      const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
      return (
        doneRecipes.map((elem, index) => (
          <CardFeitas key={ index } objDetail={ elem } index={ index } />
        ))
      );
    }
    return <span>Você não tem receitas feitas</span>;
  };

  return (
    <div className="done-recipes-body">
      <div className="background-color" />
      <div className="head">

        <h1 className="title">Receitas Feitas</h1>
        <div className="done-button-content">
          <button
            type="button"
            data-testid="filter-by-all-btn"
          >
            All
          </button>
          <button
            type="button"
            data-testid="filter-by-food-btn"
          >
            Food
          </button>
          <button
            type="button"
            data-testid="filter-by-drink-btn"
          >
            Drinks
          </button>
        </div>
      </div>
      {verify()}

    </div>
  );
}

export default ReceitasFeitas;
