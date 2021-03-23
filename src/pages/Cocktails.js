import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CocktailsActions } from '../store/ducks/cocktails';
import useToggle from '../hooks/useToggle';

import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import Card from '../components/Card';

const Cocktails = ({ fetchCocktails, drinks, notFound }) => {
  const { id } = useParams();
  const [showSearchBar, toggleSearchBar] = useToggle();

  if (id) return <p>{ `foi passado o id ${id}` }</p>;
  if (notFound) alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  if (drinks.length === 1) return <Redirect to={ `/bebidas/${drinks[0].idDrink}` } />;

  return (
    <div>
      <Header
        title="Bebidas"
        showSearchButton
        handleToggleSearchBar={ toggleSearchBar }
      />
      { showSearchBar && <SearchBar fetchFunction={ fetchCocktails } /> }
      { notFound && <p>Nenhuma bebida encontrada</p> }
      { drinks.length > 1 && drinks.slice(0, 12).map((drink, index) => (
        <Card
          key={ drink.idDrink }
          nome={ drink.strDrink }
          thumbnail={ drink.strDrinkThumb }
          index={ index }
        />)) }
    </div>
  );
};

Cocktails.propTypes = {
  fetchCocktails: PropTypes.func.isRequired,
  drinks: PropTypes.arrayOf(PropTypes.object).isRequired,
  notFound: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ cocktails }) => ({
  drinks: cocktails.drinks,
  notFound: cocktails.notFound,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(CocktailsActions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Cocktails);
