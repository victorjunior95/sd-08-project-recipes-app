import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import FilterButton from '../../components/FilterButton';
import DoneRecipeCard from '../../components/cards/DoneRecipeCard';

function DoneRecipes({ history }) {
  // const [listOfDoneRecipes, setListOfDoneRecipes] = useState([]);
  // const dones = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

  return (
    <>
      <Header history={ history } />
      <main>
        <section>
          <FilterButton filter="all" />
          <FilterButton filter="food" />
          <FilterButton filter="drinks" />
        </section>
        <section>
          { favorites.map((recipe, index) => (
            <DoneRecipeCard
              index={ index }
              key={ recipe.id }
              recipe={ recipe }
            />
          )) }
        </section>
      </main>
    </>
  );
}

DoneRecipes.propTypes = {
  history: PropTypes.string.isRequired,
};

export default DoneRecipes;
