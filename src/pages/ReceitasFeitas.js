import React from 'react';
import DoneRecipeCard from '../components/DoneRecipeCard';
import HeaderWithoutSearch from '../components/HeaderWithoutSearch';

const receitasFeitas = [{
  id: 12345,
  type: 'meal',
  area: 'area',
  category: 'categoria',
  alcoholicOrNot: '',
  name: 'Miojo',
  image: 'foto',
  doneDate: 'diaTal',
  tags: ['Curry', 'Pasta'],
},
{
  id: 54321,
  type: 'drink',
  area: 'area1',
  category: 'categoria1',
  alcoholicOrNot: 'yes',
  name: 'mojito',
  image: 'foto1',
  doneDate: 'diaTal',
  tags: ['tag1', 'tag2'],
}];

function handleClick({ target }) {
  console.log(target.value);
}

function ReceitasFeitas() {
  return (
    <>
      <HeaderWithoutSearch />
      <main>
        <button
          data-testid="filter-by-all-btn"
          type="button"
          value="all"
          onClick={ () => handleClick('all') }
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          value="food"
          onClick={ () => handleClick('meal') }
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          value="drinks"
          onClick={ () => handleClick('drink') }
        >
          Drinks
        </button>
        {
          receitasFeitas.map(
            (recipe) => <DoneRecipeCard key={ recipe } recipe={ recipe } />,
          )
        }
      </main>
    </>
  );
}

export default ReceitasFeitas;
