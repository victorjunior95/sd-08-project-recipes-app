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

  return (
    <Container>
      <Header title="Explorar Ingredientes" />
      <CardsContainer>
        { ingredients.length > 0 && ingredients.map(({
          strCocktail,
          idCocktail,
          thumbnail = 'https://www.themealdb.com/images/ingredients/Lime.png',
        }, index) => (
          <IngredientCard
            name={ strCocktail }
            thumbnail={ thumbnail }
            key={ idCocktail }
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

const mapStateToProps = ({ meals }) => ({
  cocktails: meals.ingredients.slice(0, COCKTAILS_LIMIT),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(IngredientActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ExploreCocktailsByIngredient);
