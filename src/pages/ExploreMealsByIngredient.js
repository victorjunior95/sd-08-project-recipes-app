import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as IngredientsActions } from '../store/ducks/mealIngredients';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import IngredientCard from '../components/IngredientCard';
import CardsContainer from '../components/CardsContainer';

const INGREDIENTS_LIMIT = 12;

const ExploreMealsByIngredient = ({ fetchIngredients, ingredients }) => {
  useEffect(() => {
    fetchIngredients();
    console.log('whats?');
  }, []);

  console.log(ingredients, fetchIngredients);

  return (
    <Container>
      <Header title="Explorar Ingredientes" />
      <CardsContainer>
        { ingredients.length > 0 && ingredients.map(({
          strIngredient,
          idIngredient,
          thumbnail = `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png`,
        }, index) => (
          <IngredientCard
            name={ strIngredient }
            thumbnail={ thumbnail }
            key={ idIngredient }
            index={ index }
          />)) }
      </CardsContainer>
      <Footer />
    </Container>
  );
};

ExploreMealsByIngredient.propTypes = {
  fetchIngredients: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ meals: { ingredients } }) => ({
  ingredients: ingredients.ingredients.slice(0, INGREDIENTS_LIMIT),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(IngredientsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ExploreMealsByIngredient);
