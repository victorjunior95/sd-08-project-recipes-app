import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as IngredientActions } from '../store/ducks/cocktailIngredients';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import IngredientCard from '../components/IngredientCard';
import CardsContainer from '../components/CardsContainer';

const COCKTAILS_LIMIT = 12;

const ExploreCocktailsByIngredient = ({ fetchIngredients, ingredients }) => {
  useEffect(() => {
    fetchIngredients();
  }, []);

  console.log(ingredients);

  return (
    <Container>
      <Header title="Explorar Ingredientes" />
      <CardsContainer>
        { ingredients.length > 0 && ingredients.map(({
          strIngredient1,
          thumbnail = `https://www.themealdb.com/images/ingredients/${strIngredient1}-Small.png`,
        }, index) => (
          <IngredientCard
            name={ strIngredient1 }
            thumbnail={ thumbnail }
            key={ index }
            index={ index }
          />)) }
      </CardsContainer>
      <Footer />
    </Container>
  );
};

ExploreCocktailsByIngredient.propTypes = {
  fetchIngredients: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ cocktails: { ingredients } }) => ({
  ingredients: ingredients.ingredients.slice(0, COCKTAILS_LIMIT),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(IngredientActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ExploreCocktailsByIngredient);
