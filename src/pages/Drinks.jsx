import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import SearchButton from '../components/SearchButton';
import Card from '../components/Card';
import '../styles/card.css';

function Drinks() {
  const MAX_ARRAY_SIZE = 12;
  const drinks = useSelector((state) => state.FilteredRecipes.drinks);
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
    if (drinks.length === 1) {
      const id = drinks[0].idDrink;
      const path = `/bebidas/${id}`;
      return <Redirect to={ path } />;
    }
    if (drinks.length > MAX_ARRAY_SIZE) {
      const subArray = drinks.splice(0, MAX_ARRAY_SIZE);
      return mapCards(subArray);
    }
    return mapCards(drinks);
  };
  return (
    <>
      <Header label="Bebidas" Search={ SearchButton } page="Bebidas" />
      { showCards() }
    </>
  );
}

export default Drinks;
