import React from 'react';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';

const receitasFavoritas = [{
  id: 12345,
  type: 'meal',
  area: 'area',
  category: 'categoria',
  alcoholicOrNot: '',
  name: 'Miojo',
  image: 'foto',
},
{
  id: 54321,
  type: 'drink',
  area: 'area1',
  category: 'categoria1',
  alcoholicOrNot: 'yes',
  name: 'mojito',
  image: 'foto1',
}];

function handleClick({ target }) {
  console.log(target.value);
}

function ReceitasFavoritas() {
  return (
    <>
      <HeaderWithoutSearch />
      <main>
        <button
          data-testid="filter-by-all-btn"
          type="button"
          value="all"
          onClick={ (e) => handleClick(e) }
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          value="food"
          onClick={ (e) => handleClick(e) }
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          value="drinks"
          onClick={ (e) => handleClick(e) }
        >
          Drinks
        </button>
        {
          receitasFavoritas.map(
            (recipe) => <FavoriteRecipeCard key={ recipe } recipe={ recipe } />,
          )
        }
      </main>
    </>
  );
}

export default ReceitasFavoritas;
