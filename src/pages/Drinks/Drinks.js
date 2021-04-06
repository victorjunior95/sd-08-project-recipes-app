import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getDrinks } from '../../redux/actions';
import Card from '../../components/cards/DrinkCard';
import Categories from '../../components/Categorie/DrinkCategories';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading/Loading';
import '../Meals/Meals.scss';

function Bebidas({ history }) {
  const QUANTITY_OF_CARDS = 12;
  let drinksFiltred = [];
  const dispatch = useDispatch();
  const drinks = useSelector((state) => state.drinkReducer.drinks);

  useEffect(() => {
    if (drinks === undefined) dispatch(getDrinks());
  }, [dispatch, drinks]);

  if (drinks) {
    drinksFiltred = drinks
      .filter((meal, index) => index < QUANTITY_OF_CARDS);
  } else { return <Loading />; }

  return (
    <>
      <Header history={ history } />
      <Categories />
      <section className="recipesCard">
        {drinksFiltred
          .map((drink, index) => (<Card
            className="cardsFade"
            key={ drink.idDrink }
            data={ { drink, index, recipeCard: '-recipe-card' } }
          />))}
      </section>
      <Footer />
    </>
  );
}

Bebidas.propTypes = {
  history: PropTypes.string.isRequired,
};

export default Bebidas;
