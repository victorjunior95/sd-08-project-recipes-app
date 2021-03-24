import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect, useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MealsActions } from '../store/ducks/meals';
import useToggle from '../hooks/useToggle';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import Footer from '../components/Footer';
import CardsContainer from '../components/CardsContainer';
import Container from '../components/Container';
import FilterList from '../components/FilterList';
import LoadingScreen from '../components/LoadingScreen';

const RESULTS_LIMIT = 12;

const Meals = ({ fetchMeals, fetchCategories,
  isFetchingMeals, isFetchingCategories, meals, notFound, categories }) => {
  const { id } = useParams();
  const [showSearchBar, toggleSearchBar] = useToggle();

  useEffect(() => {
    const fetchingMeals = async () => {
      await fetchMeals();
      await fetchCategories();
    };
    fetchingMeals();
  }, []);

  if (id) return <p>{ `foi passado o id ${id}` }</p>;
  if (notFound) alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  if (meals.length === 1) return <Redirect to={ `/comidas/${meals[0].idMeal}` } />;
  if (isFetchingMeals || isFetchingCategories) {
    return (
      <Container>
        <Header
          title="Comidas"
          showSearchButton
          handleToggleSearchBar={ toggleSearchBar }
        />
        <LoadingScreen />
        <Footer />
      </Container>
    );
  }

  return (
    <Container>
      <Header
        title="Comidas"
        showSearchButton
        handleToggleSearchBar={ toggleSearchBar }
      />
      <FilterList categories={ categories } />
      { showSearchBar && <SearchBar fetchFunction={ fetchMeals } /> }
      { notFound && <p>Nenhuma comida encontrada</p> }
      <CardsContainer>
        { meals.length > 1 && meals.slice(0, RESULTS_LIMIT).map((meal, index) => (
          <Card
            key={ meal.idMeal }
            nome={ meal.strMeal }
            thumbnail={ meal.strMealThumb }
            index={ index }
          />)) }
      </CardsContainer>
      <Footer />
    </Container>
  );
};

Meals.propTypes = {
  fetchMeals: PropTypes.func.isRequired,
  isFetchingMeals: PropTypes.bool.isRequired,
  isFetchingCategories: PropTypes.bool.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  notFound: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ meals }) => ({
  meals: meals.meals,
  isFetchingMeals: meals.isFetchingMeals,
  isFetchingCategories: meals.isFetchingCategories,
  notFound: meals.notFound,
  categories: meals.categories,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(MealsActions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Meals);
