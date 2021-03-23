import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import SearchButton from '../components/SearchButton';
import Card from '../components/Card';

function Foods() {
  const foods = useSelector((state) => state.FilteredFoodsRecipes.foods);
  return (
    <>
      <Header label="Comidas" Search={ SearchButton } page="Comidas" />
      {foods.map((food) => (
        <Card
          key={ food.idMeal }
          idMeal={ food.idMeal }
          imagePath={ food.strMealThumb }
          title={ food.strMeal }
          category={ food.strCategory }
        />
      ))}
    </>
  );
}

export default Foods;
