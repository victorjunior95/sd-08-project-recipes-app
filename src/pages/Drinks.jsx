import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import SearchButton from '../components/SearchButton';
import Card from '../components/Card';
import '../styles/card.css';
import Footer from '../components/Footer';
import { actionThunkMainDrinks } from '../redux/actions';
import CategoriesContainer from '../components/CategoriesContainer';

function Drinks() {
  const MAX_ARRAY_SIZE = 12;
  const drinks = useSelector((state) => state.FilteredRecipes.drinks);
  const mainDrinks = useSelector((state) => state.MainRecipes.mainDrinks);
  const isLoading = useSelector((state) => state.Loading.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionThunkMainDrinks());
  }, []);

  const mapCards = (array) => (
    <section>
      {array.map((drink, index) => (
        <Card
          index={ index }
          key={ drink.idDrink }
          id={ drink.idDrink }
          imagePath={ drink.strDrinkThumb }
          title={ drink.strDrink }
          category={ drink.strCategory }
        />
      ))}
    </section>
  );
  const showCards = () => {
    let drinksToMap = [];
    if (drinks.length === 0) {
      drinksToMap = [...mainDrinks];
    } else {
      drinksToMap = [...drinks];
    }
    if (drinksToMap.length === 1) {
      const id = drinksToMap[0].idDrink;
      const path = `/bebidas/${id}`;
      return <Redirect to={ path } />;
    }
    if (drinksToMap.length > MAX_ARRAY_SIZE) {
      const subArray = drinksToMap.splice(0, MAX_ARRAY_SIZE);
      return mapCards(subArray);
    }
    return mapCards(drinksToMap);
  };
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Header label="Bebidas" Search={ SearchButton } page="Bebidas" />
          <CategoriesContainer page="Bebidas" />
          {showCards()}
          <Footer />
        </>
      )}
    </div>
  );
}

export default Drinks;
