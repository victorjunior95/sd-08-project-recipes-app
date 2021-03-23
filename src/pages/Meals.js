import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as RecipesActions } from '../store/ducks/meals';
import useToggle from '../hooks/useToggle';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

const RESULTS_LIMIT = 12;

const Meals = ({ fetchMeals, meals, notFound }) => {
  const { id } = useParams();
  const [showSearchBar, toggleSearchBar] = useToggle();

  if (id) return <p>{ `foi passado o id ${id}` }</p>;
  if (notFound) alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  if (meals.length === 1) return <Redirect to={ `/comidas/${meals[0].idMeal}` } />;

  return (
    <div>
      <Header
        title="Comidas"
        showSearchButton
        handleToggleSearchBar={ toggleSearchBar }
      />
      { showSearchBar && <SearchBar fetchFunction={ fetchMeals } /> }
      { notFound && <p>Nenhuma comida encontrada</p> }
      { meals.length > 1 && meals.slice(0, RESULTS_LIMIT).map((meal, index) => (
        <Card
          key={ meal.idMeal }
          nome={ meal.strMeal }
          thumbnail={ meal.strMealThumb }
          index={ index }
        />)) }
    </div>
  );
};

Meals.propTypes = {
  fetchMeals: PropTypes.func.isRequired,
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  notFound: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ meals }) => ({
  meals: meals.meals,
  notFound: meals.notFound,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(RecipesActions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Meals);
