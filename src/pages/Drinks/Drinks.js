import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrinks } from '../../redux/actions';
import Card from '../../components/cards/DrinkCard';
import Categories from '../../components/Categorie/DrinkCategories';

function Bebidas() {
  const QUANTITY_OF_CARDS = 12;
  let drinksFiltred = [];
  const dispatch = useDispatch();
  const drinks = useSelector((state) => state.drinkReducer.drinks);

  useEffect(() => {
    dispatch(getDrinks());
  }, [dispatch]);

  if (drinks) drinksFiltred = drinks.filter((meal, index) => index < QUANTITY_OF_CARDS);

  return (
    <>
      <Categories />
      {drinksFiltred
        .map((drink, index) => (<Card
          key={ drink.idDrink }
          data={ { drink, index, recipeCard: '-recipe-card' } }
        />))}
    </>
  );
}

export default Bebidas;
