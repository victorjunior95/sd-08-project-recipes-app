import React, { useContext } from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { FoodCtx } from '../../context/ContextFood';

function Foods() {
  const { foodApi: { meals } } = useContext(FoodCtx);
  return (
    <div>
      <Header name="Comidas" icon="true" />
      <div>
        {meals && meals.map((item) => (
          <Card
            key={ item.idMeal }
            id={ item.idMeal }
            name={ item.strMeal }
            img={ item.strMealThumb }
          />
        ))}
      </div>
    </div>
  );
}

export default Foods;
