import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMeals } from '../../redux/actions';
import Card from '../../components/cards/MealCard';
import Categories from '../../components/Categorie/MealsCategories';

function Comidas() {
  const QUANTITY_OF_CARDS = 12;
  let mealsFiltred = [];
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.mealsReducer.meals);

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  if (meals) mealsFiltred = meals.filter((meal, index) => index < QUANTITY_OF_CARDS);

  return (
    <>
      <Categories />
      {mealsFiltred
        .map((meal, index) => (<Card
          key={ meal.idMeal }
          data={ { meal, index, recipeCard: '-recipe-card' } }
        />))}
    </>
  );
}

export default Comidas;
