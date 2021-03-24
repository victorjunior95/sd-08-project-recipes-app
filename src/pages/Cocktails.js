import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CocktailsActions } from '../store/ducks/cocktails';
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

const Cocktails = ({ fetchCocktails, fetchCategories,
  isFetchingCocktails, isFetchingCategories, drinks, notFound, categories }) => {
  const { id } = useParams();
  const [showSearchBar, toggleSearchBar] = useToggle();

  // useEffect(() => {
  //   fetchCocktails();
  //   fetchCategories();
  // }, []);

  useEffect(() => {
    const fetchingCocktails = async () => {
      await fetchCocktails();
      await fetchCategories();
    };
    fetchingCocktails();
  }, []);

  if (id) return <p>{ `foi passado o id ${id}` }</p>;
  if (notFound) alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  if (drinks.length === 1) return <Redirect to={ `/bebidas/${drinks[0].idDrink}` } />;

  if (isFetchingCocktails && isFetchingCategories) {
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
      { showSearchBar && <SearchBar fetchFunction={ fetchCocktails } /> }
      { notFound && <p>Nenhuma bebida encontrada</p> }
      <CardsContainer>
        { drinks.length > 1 && drinks.slice(0, RESULTS_LIMIT).map((drink, index) => (
          <Card
            key={ drink.idDrink }
            nome={ drink.strDrink }
            thumbnail={ drink.strDrinkThumb }
            index={ index }
          />)) }
      </CardsContainer>
      <Footer />
    </Container>
  );
};

Cocktails.propTypes = {
  fetchCocktails: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
  isFetchingCocktails: PropTypes.bool.isRequired,
  isFetchingCategories: PropTypes.bool.isRequired,
  drinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  notFound: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ cocktails }) => ({
  drinks: cocktails.drinks,
  isFetchingCocktails: cocktails.isFetchingCocktails,
  isFetchingCategories: cocktails.isFetchingCategories,
  notFound: cocktails.notFound,
  categories: cocktails.categories,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(CocktailsActions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Cocktails);
