import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import SearchButton from '../components/SearchButton';
import Card from '../components/Card';
import '../styles/card.css';

function Drinks() {
  const drinks = useSelector((state) => state.FilteredRecipes.drinks);
  return (
    <>
      <Header label="Bebidas" Search={ SearchButton } page="Bebidas" />
      {drinks.map((drink) => (
        <Card
          key={ drink.idDrink }
          idMeal={ drink.idDrink }
          imagePath={ drink.strDrinkThumb }
          title={ drink.strDrink }
          category={ drink.strCategory }
        />
      ))}
    </>
  );
}

export default Drinks;
