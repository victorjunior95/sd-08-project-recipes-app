import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { FoodCtx } from '../../context/ContextFood';

function Drinks() {
  const STOP_INDEX = 11;
  const { drinkApi: { drinks } } = useContext(FoodCtx);
  console.log(drinks);
  return (
    <div>
      <Header name="Bebidas" currentPage="Drinks" />
      <div className="cards">
        {drinks && drinks
          .filter((drink, index) => index <= STOP_INDEX)
          .map((item, index) => (
            <Card
              key={ item.idDrink }
              id={ item.idDrink }
              name={ item.strDrink }
              img={ item.strDrinkThumb }
              index={ index }
            />
          ))}
        { drinks && drinks.length === 1
          ? <Redirect to={ `/bebidas/${drinks[0].idDrink}` } /> : '' }
      </div>
    </div>
  );
}

export default Drinks;
