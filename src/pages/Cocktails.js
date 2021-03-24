import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as RecipesActions } from '../store/ducks/cocktailRecipes';
import { Creators as CategoriesActions } from '../store/ducks/cocktailCategories';
import useToggle from '../hooks/useToggle';

import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
import CardsContainer from '../components/CardsContainer';
import Container from '../components/Container';
import FilterList from '../components/FilterList';
import LoadingScreen from '../components/LoadingScreen';

const RESULTS_LIMIT = 12;

const Cocktails = ({ fetchRecipes, fetchCategories,
  isFetching, cocktails, notFound, categories }) => {
  const { id } = useParams();
  const [showSearchBar, toggleSearchBar] = useToggle();

  useEffect(() => {
    fetchRecipes();
    fetchCategories();
  }, []);

  if (id) return <p>{ `foi passado o id ${id}` }</p>;
  if (notFound) alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  if (cocktails.length === 1) {
    return <Redirect to={ `/bebidas/${cocktails[0].idDrink}` } />;
  }

  if (isFetching) {
    return (
      <Container>
        <Header
          title="Bebidas"
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
        title="Bebidas"
        showSearchButton
        handleToggleSearchBar={ toggleSearchBar }
      />
      <FilterList categories={ categories } />
      { showSearchBar && <SearchBar fetchFunction={ fetchRecipes } /> }
      { notFound && <p>Nenhuma bebida encontrada</p> }
      <CardsContainer>
        { cocktails.length > 1
          && cocktails.slice(0, RESULTS_LIMIT).map((cocktail, index) => (
            <Card
              key={ cocktail.idDrink }
              name={ cocktail.strDrink }
              thumbnail={ cocktail.strDrinkThumb }
              index={ index }
            />)) }
      </CardsContainer>
      <Footer />
    </Container>
  );
};

Cocktails.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  cocktails: PropTypes.arrayOf(PropTypes.object).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  notFound: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ cocktails: { recipes, categories } }) => ({
  cocktails: recipes.recipes,
  isFetching: recipes.isFetching,
  notFound: recipes.notFound,
  categories: categories.categories,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    ...RecipesActions,
    ...CategoriesActions,
  }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Cocktails);
