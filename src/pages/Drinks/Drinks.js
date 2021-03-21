import React, { useContext } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { FoodCtx } from '../../context/ContextFood';

function Drinks() {
  const { drinkApi: { drinks } } = useContext(FoodCtx);
  console.log(drinks);
  return (
    <div>
      <Header name="Bebidas" currentPage="Drinks" />
      <div className="cards">
        {drinks && drinks.map((item) => (
          <Card
            key={ item.idDrink }
            id={ item.idDrink }
            name={ item.strDrink }
            img={ item.strDrinkThumb }
          />
        ))}
      </div>
    </div>
  );
}

export default Drinks;
